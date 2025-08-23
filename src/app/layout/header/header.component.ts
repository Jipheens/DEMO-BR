import { DOCUMENT } from "@angular/common";
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  AfterViewInit,
} from "@angular/core";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { filter, Subscription, takeUntil } from "rxjs";

import { ConfigService } from "src/app/config/config.service";
import { AuthService } from "src/app/core/service/auth.service";
import { LanguageService } from "src/app/core/service/language.service";
import { TokenCookieService } from "src/app/core/service/token-storage-cookies.service";
import { NotificationService } from "src/app/erp-hr/data/notification.service";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
const document: any = window.document;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"],
})
export class HeaderComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit, AfterViewInit {
  public config: any = {};
  userImg: string;
  homePage: string;
  isNavbarCollapsed = true;
  flagvalue;
  countryName;
  langStoreValue: string;
  defaultFlag: string;
  isOpenSidebar: boolean;
  userName: string;

  currentUrl: string = '';
  moduleName: string = 'Main Dashboard';

  currentUser: any;

  routerEventsSubscription: Subscription

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private configService: ConfigService,
    private authService: AuthService,
    private router: Router,
    public languageService: LanguageService,
    // private tokenStorage: TokenStorageService,
    private tokenCookieService: TokenCookieService,
    private notificationAPI: NotificationService,
    private snackbar: SnackbarService,
  ) {
    super();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Extract full URL
        const fullUrl = event.urlAfterRedirects;

        // Extract base URL segment
       // this.currentUrl = fullUrl.substring(fullUrl.lastIndexOf("/") + 1);

        // console.log('Full URL:', fullUrl); 
        // console.log('Extracted URL Segment:', this.currentUrl);

        // Determine module name based on current URL
        this.updateModuleName(fullUrl);
      });

    this.currentUser = this.tokenCookieService.getUser();
    this.getProfileImage();
  }
  listLang = [
    { text: "English", flag: "assets/images/flags/us.jpg", lang: "en" },
    { text: "Spanish", flag: "assets/images/flags/spain.jpg", lang: "es" },
    { text: "German", flag: "assets/images/flags/germany.jpg", lang: "de" },
  ];
  notifications: any[] = [
    {
      message: "Please check your mail",
      time: "14 mins ago",
      icon: "mail",
      color: "nfc-green",
      status: "msg-unread",
    },
    {
      message: "New Employee Added..",
      time: "22 mins ago",
      icon: "person_add",
      color: "nfc-blue",
      status: "msg-read",
    },
    {
      message: "Your leave is approved!! ",
      time: "3 hours ago",
      icon: "event_available",
      color: "nfc-orange",
      status: "msg-read",
    },
    {
      message: "Lets break for lunch...",
      time: "5 hours ago",
      icon: "lunch_dining",
      color: "nfc-blue",
      status: "msg-read",
    },
    {
      message: "Employee report generated",
      time: "14 mins ago",
      icon: "description",
      color: "nfc-green",
      status: "msg-read",
    },
    {
      message: "Please check your mail",
      time: "22 mins ago",
      icon: "mail",
      color: "nfc-red",
      status: "msg-read",
    },
    {
      message: "Salary credited...",
      time: "3 hours ago",
      icon: "paid",
      color: "nfc-purple",
      status: "msg-read",
    },
  ];

  ngOnInit() {
    this.config = this.configService.configData;
    // const userRole = this.tokenCookieService.getUser().roles[0];
    this.userName = this.tokenCookieService.getUser().username;
    this.userImg = "assets/images/user/profile_img.png";

    this.homePage = "/erp-dashboard/main";


    // if (userRole === "ROLE_ADMIN") {
    //   this.homePage = "admin/dashboard";
    // } else if (userRole === "ROLE_USER") {
    //   this.homePage = "user/dashboard";
    // } else {
    //   // 404?
    //   this.homePage = "page-not-found";
    // }

    this.langStoreValue = localStorage.getItem("lang");
    const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
    this.countryName = val.map((element) => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.defaultFlag = "assets/images/flags/us.jpg";
      }
    } else {
      this.flagvalue = val.map((element) => element.flag);
    }
  }

  ngAfterViewInit() {
    // set theme on startup
    if (localStorage.getItem("theme")) {
      this.renderer.removeClass(this.document.body, this.config.layout.variant);
      this.renderer.addClass(this.document.body, localStorage.getItem("theme"));
    } else {
      this.renderer.addClass(this.document.body, this.config.layout.variant);
    }

    if (localStorage.getItem("menuOption")) {
      this.renderer.addClass(
        this.document.body,
        localStorage.getItem("menuOption")
      );
    } else {
      this.renderer.addClass(
        this.document.body,
        "menu_" + this.config.layout.sidebar.backgroundColor
      );
    }

    if (localStorage.getItem("choose_logoheader")) {
      this.renderer.addClass(
        this.document.body,
        localStorage.getItem("choose_logoheader")
      );
    } else {
      this.renderer.addClass(
        this.document.body,
        "logo-" + this.config.layout.logo_bg_color
      );
    }

    if (localStorage.getItem("sidebar_status")) {
      if (localStorage.getItem("sidebar_status") === "close") {
        this.renderer.addClass(this.document.body, "side-closed");
        this.renderer.addClass(this.document.body, "submenu-closed");
      } else {
        this.renderer.removeClass(this.document.body, "side-closed");
        this.renderer.removeClass(this.document.body, "submenu-closed");
      }
    } else {
      if (this.config.layout.sidebar.collapsed === true) {
        this.renderer.addClass(this.document.body, "side-closed");
        this.renderer.addClass(this.document.body, "submenu-closed");
      }
    }






  }
  private updateModuleName(fullUrl: string): void {
    if (fullUrl.includes('erp-admin')) {
      this.moduleName = 'Admin Module';
    } else if (fullUrl.includes('erp-procurement')) {
      this.moduleName = 'Procurement Module';
    } else if (fullUrl.includes('erp-hr-self-service')) {
      this.moduleName = 'Human Resource Self Service Module';
    } else if (fullUrl.includes('erp-hr')) {
      this.moduleName = 'Human Resource Module';
    } else if (fullUrl.includes('erp-finance')) {
      this.moduleName = 'Finance Module';
    } else if (fullUrl.includes('erp-fixed-assets')) {
      this.moduleName = 'Fixed Assets Module';
    } else if (fullUrl.includes('erp-suppliers-management')) {
      this.moduleName = 'Suppliers Management Module';
    } else if (fullUrl.includes('erp-budget')) {
      this.moduleName = 'Budget Module';
    } else if (fullUrl.includes('erp-imprest')) {
      this.moduleName = 'Imprest Module';
    } else if (fullUrl.includes('erp-prepayment')) {
      this.moduleName = 'Prepayment Module';
    } else if (fullUrl.includes('erp-inventory')) {
      this.moduleName = 'Inventory Module';
    } else if (fullUrl.includes('erp-dashboard')) {
      this.moduleName = 'Main Dashboard';
    } else if (fullUrl.includes('erp-reports')) {
      this.moduleName = 'Reports Module';
    } else {
      this.moduleName = 'Main Dashboard';
    }
  }


  callFullscreen() {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.langStoreValue = lang;
    this.languageService.setLanguage(lang);
  }
  mobileMenuSidebarOpen(event: any, className: string) {
    const hasClass = event.target.classList.contains(className);
    if (hasClass) {
      this.renderer.removeClass(this.document.body, className);
    } else {
      this.renderer.addClass(this.document.body, className);
    }
  }
  callSidemenuCollapse() {
    const hasClass = this.document.body.classList.contains("side-closed");
    if (hasClass) {
      this.renderer.removeClass(this.document.body, "side-closed");
      this.renderer.removeClass(this.document.body, "submenu-closed");
    } else {
      this.renderer.addClass(this.document.body, "side-closed");
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
        //this.snackbar.showNotification("snackbar-success", res.message);

        // console.log("getProfileImage res: ", res);
        if (res.entity && res.entity.imageFile) {
          this.profileImage = res.entity.imageFile;
        }
      },
      (err) => {
        console.log(err);

        // this.snackbar.showNotification("snackbar-danger", err.message);
      }
    );
  }

  backToDashboard() {
    this.router.navigate(["/erp-dashboard/main"]);
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
            this.notificationAPI.alertSuccess(res.body.message);
          } else {
            this.notificationAPI.alertWarning(res.message);
            this.router.navigate(["/authentication/signin"]);
          }
        },
        (err) => {
          console.log("ERR: ", err);
          this.router.navigate(["/authentication/signin"]);
          this.notificationAPI.alertWarning(err.message);
        }
      );
  }
}

// {
//   "message": "LOGOUT SUCCESSFULLY!",
//   "entity": null,
//   "statusCode": 200
// }