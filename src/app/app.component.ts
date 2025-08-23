import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { Event, Router, NavigationStart } from "@angular/router";
import { TokenCookieService } from "./core/service/token-storage-cookies.service";
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar,
} from "@angular/material/snack-bar";
import { EMPTY, Subscription, interval, switchMap } from "rxjs";
import { AuthService } from "./core/service/auth.service";
import { IdleTimer } from "./core/service/idletime.service";
import { NotificationService } from "./erp-hr/data/notification.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }

  currentUrl: string;
  horizontalPosition: MatSnackBarHorizontalPosition = "end";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  private routerEventsSubscription: Subscription;
  private tokenRefreshSubscription: Subscription;

  private isUserIdle = false;
  private failedRefreshAttempts = 0;
  private currentUser: any;

  private idleTimerStarted = false;
  private tokenRefreshStarted = false;

  authRoutes = [
    "/authentication/signin",
    "/authentication/signup",
    "/authentication/OTP",
  ];

  constructor(
    private tokenCookieService: TokenCookieService,
    private snackBar: MatSnackBar,
    private idleTimer: IdleTimer,
    private router: Router,
    private authService: AuthService,
    private notificationAPI: NotificationService
  ) {
    this.snackBar.dismiss();
    this.routerEventsSubscription = this.router.events.subscribe(
      (routerEvent: Event) => {
        if (routerEvent instanceof NavigationStart) {
          this.currentUrl = routerEvent.url.substring(
            routerEvent.url.lastIndexOf("/") + 1
          );
        }
      }
    );
  }

 ngOnInit(): void {
  const user = this.tokenCookieService.getUser();

  if (user && !this.idleTimerStarted) {
    this.currentUser = user;
    this.setupIdleTimer();
    this.startTokenRefresh(user);
    this.idleTimerStarted = true;
    this.tokenRefreshStarted = true;
  }

  this.tokenCookieService.currentUser$.subscribe((user) => {
    if (user && !this.idleTimerStarted) {
      this.currentUser = user;
      this.setupIdleTimer();
      this.startTokenRefresh(user);
      this.idleTimerStarted = true;
      this.tokenRefreshStarted = true;
    }
  });
}


  private setupIdleTimer(): void {
    this.idleTimer.start({
      timeout: 60 * 5, 
      onTimeout: () => {
        this.isUserIdle = true;
        this.logout();
      }
    });

    this.listenToUserActivity();
  }

  private stopIdleTimer(): void {
    if (this.idleTimer?.stop) {
      this.idleTimer.stop();
    }
  }

  private listenToUserActivity(): void {
    const activityEvents = ['mousemove', 'keydown', 'click', 'scroll'];

    activityEvents.forEach((event) => {
      window.addEventListener(event, () => {
        if (this.isUserIdle) {
          this.isUserIdle = false;
        }
        if (this.idleTimer?.reset) {
          this.idleTimer.reset(); 
        }
      });
    });
  }

  private startTokenRefresh(user: any): void {
    if (this.tokenRefreshSubscription) {
      this.tokenRefreshSubscription.unsubscribe();
    }

    this.tokenRefreshSubscription = interval(120000)// every 2 minutes
      .pipe(
        switchMap(() => {
          if (user && user.refreshToken && !this.isUserIdle) {
            return this.authService.refreshAccessToken(user.refreshToken);
          } else {
            return EMPTY;
          }
        })
      )
      .subscribe(
        (response) => {
          this.failedRefreshAttempts = 0;
          if (response !== null && response !== undefined) {
            this.tokenCookieService.saveUser(response.entity);
          }
        },
        (error) => {
          console.error("Token refresh failed:", error);
          this.failedRefreshAttempts++;

          if (this.failedRefreshAttempts >= 3) {
            this.logout();
          }
        }
      );
  }

  logout(): void {
    this.stopIdleTimer();
    this.isUserIdle = false;
    this.idleTimerStarted = false;
    this.tokenRefreshStarted = false;

    if (this.tokenRefreshSubscription) {
      this.tokenRefreshSubscription.unsubscribe();
    }

    this.tokenCookieService.signOut(this.currentUser?.refreshToken).subscribe(
      (res) => {
        this.router.navigate(["/authentication/signin"]);
        this.notificationAPI.alertSuccess(res.body?.message || "Logged out");
      },
      (err) => {
        this.router.navigate(["/authentication/signin"]);
        this.notificationAPI.alertWarning(err.message || "Logout failed");
      }
    );
  }

  ngOnDestroy(): void {
    if (this.tokenRefreshSubscription) {
      this.tokenRefreshSubscription.unsubscribe();
    }
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
    this.stopIdleTimer();
  }
}



