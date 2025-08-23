import { Router, NavigationEnd } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  OnDestroy,
} from "@angular/core";
import { AuthService } from "src/app/core/service/auth.service";
import { TokenCookieService } from "src/app/core/service/token-storage-cookies.service";
import {  HumanResourceModule,  HumanResourceSelfServiceModule} from "./sidebar-items";
import { NotificationService } from "src/app/erp-hr/data/notification.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.sass"],
})
export class SidebarComponent implements OnInit, OnDestroy {
  public sidebarItems: any[];
  level1Menu = "";
  level2Menu = "";
  level3Menu = "";
  public innerHeight: any;
  public bodyTag: any;
  listMaxHeight: string;
  listMaxWidth: string;
  userFullName: string;
  userImg: string;
  userType: string;
  headerHeight = 60;
  currentRoute: string;
  routerObj = null;

  currentUser: any;

  userName = "";
  userRole = "";

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private authService: AuthService,
    private tokenCookieService: TokenCookieService,
    private router: Router,
    private notificationService: NotificationService,
  ) {
    this.currentUser = this.tokenCookieService.getUser();
    this.getProfileImage();
    
    const body = this.elementRef.nativeElement.closest("body");

    this.routerObj = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.renderer.removeClass(this.document.body, "overlay-open");
      }
    });
  }

  @HostListener("window:resize", ["$event"])
  windowResizecall(event) {
    this.setMenuHeight();
    this.checkStatuForResize(false);
  }
  
  @HostListener("document:mousedown", ["$event"])
  onGlobalClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.document.body, "overlay-open");
    }
  }

  callLevel1Toggle(event: any, element: any) {
    if (element === this.level1Menu) {
      this.level1Menu = "0";
    } else {
      this.level1Menu = element;
      this.level2Menu = "";
      this.level3Menu = "";
    }
    const hasClass = event.target.classList.contains("toggled");
    if (hasClass) {
      this.renderer.removeClass(event.target, "toggled");
    } else {
      this.renderer.addClass(event.target, "toggled");
    }
  }

  callLevel2Toggle(event: any, element: any) {
    if (element === this.level2Menu) {
      this.level2Menu = "0";
    } else {
      this.level2Menu = element;
      this.level3Menu = "";
    }
  }

  callLevel3Toggle(event: any, element: any) {
    if (element === this.level3Menu) {
      this.level3Menu = "0";
    } else {
      this.level3Menu = element;
    }
  }

  ngOnInit() {
    if (this.currentUser) {
      console.log("this.currentUser:::: ", this.currentUser);
      this.userName = this.currentUser.username;
      this.userRole = 'Superuuser';
      this.userFullName = this.currentUser.username;
      this.userImg = "assets/images/user/profile_img.png";

      // SIMPLIFIED: Directly assign HR modules without privilege checks
      this.sidebarItems = [
        ...HumanResourceModule,
        ...HumanResourceSelfServiceModule
      ];
      
      console.log("HR Modules loaded:", this.sidebarItems);
    }

    this.initLeftSidebar();
    this.bodyTag = this.document.body;
  }
  
  ngOnDestroy() {
    this.routerObj.unsubscribe();
  }
  
  initLeftSidebar() {
    const _this = this;
    _this.setMenuHeight();
    _this.checkStatuForResize(true);
  }
  
  setMenuHeight() {
    this.innerHeight = window.innerHeight;
    const height = this.innerHeight - this.headerHeight;
    this.listMaxHeight = height + "";
    this.listMaxWidth = "500px";
  }
  
  isOpen() {
    return this.bodyTag.classList.contains("overlay-open");
  }
  
  checkStatuForResize(firstTime) {
    if (window.innerWidth < 1170) {
      this.renderer.addClass(this.document.body, "ls-closed");
    } else {
      this.renderer.removeClass(this.document.body, "ls-closed");
    }
  }
  
  mouseHover(e) {
    const body = this.elementRef.nativeElement.closest("body");
    if (body.classList.contains("submenu-closed")) {
      this.renderer.addClass(this.document.body, "side-closed-hover");
      this.renderer.removeClass(this.document.body, "submenu-closed");
    }
  }
  
  mouseOut(e) {
    const body = this.elementRef.nativeElement.closest("body");
    if (body.classList.contains("side-closed-hover")) {
      this.renderer.removeClass(this.document.body, "side-closed-hover");
      this.renderer.addClass(this.document.body, "submenu-closed");
    }
  }

  profileImage: string | ArrayBuffer | null = null;

  getProfileImage() {
    let params = {
      empPf: this.currentUser.empPfNo,
    };
    this.authService.getUserProfileImage(params).subscribe(
      (res) => {
        if (res.entity && res.entity.imageFile) {
          this.profileImage = res.entity.imageFile;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout(): void {
    console.log("this.currentUser : ", this.tokenCookieService.getUser().refreshToken)
    this.tokenCookieService
      .signOut(this.currentUser.refreshToken)
      .subscribe(
        (res) => {
          console.log("res: ", res);
          if (res.body.statusCode === 200) {
            this.router.navigate(["/authentication/signin"]);
            this.notificationService.alertSuccess(res.body.message);
          } else {
            this.notificationService.alertWarning(res.message);
            this.router.navigate(["/authentication/signin"]);
          }
        },
        (err) => {
          console.log("ERR: ", err);
          this.router.navigate(["/authentication/signin"]);
          this.notificationService.alertWarning(err.message);
        }
      );
  }
}