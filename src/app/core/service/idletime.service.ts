import { Injectable } from "@angular/core";
import Swal from "sweetalert2";
import { TokenCookieService } from "./token-storage-cookies.service";

@Injectable({
  providedIn: "root",
})
export class IdleTimer {
  private timeout: number = 300; 
  private onTimeout: Function;
  private lastActivityTime: number;
  private interval: any;
  private alertInstance: any;

 
  private eventHandler = () => {
    this.lastActivityTime = Date.now();
  };

  constructor(private tokenCookieService: TokenCookieService) {}

  start({ timeout = 300, onTimeout }) {
    const { getUser } = this.tokenCookieService;
    const currentUser = getUser();

    if (currentUser) {
      this.timeout = timeout;
      this.onTimeout = onTimeout;
      this.lastActivityTime = Date.now();

      this.tracker();
      this.startInterval(); 
    }
  }

  startInterval() {
    this.interval = setInterval(() => {
      const idleSeconds = (Date.now() - this.lastActivityTime) / 1000;
      const remaining = this.timeout - idleSeconds;

      // console.log(`Idle for: ${idleSeconds.toFixed(1)}s`);

      if (remaining <= this.timeout * 0.1 && !this.alertInstance) {
        this.showWarningAlert(remaining);
      }

      if (remaining <= 0) {
        if (this.onTimeout) {
          console.log("IdleTimer: Timeout expired, logging out...");
          this.onTimeout();
          this.clear();
        }
      } else if (this.alertInstance) {
        this.updateAlertTimeLeft(remaining);
      }
    }, 1000);
  }

  showWarningAlert(timeLeft: number) {
    this.alertInstance = Swal.fire({
      title: "Warning!",
      text: `The system will sign you out in the next ${timeLeft.toFixed(0)} seconds!`,
      icon: "warning",
      timer: timeLeft * 1000,
      timerProgressBar: true,
      showCancelButton: true,
      confirmButtonText: "Stay Logged In",
      cancelButtonText: "Sign Out",
      willClose: () => {
        this.alertInstance = null;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.lastActivityTime = Date.now();
      } else {
        if (this.onTimeout) {
          this.onTimeout();
          this.clear();
        }
      }
    });
  }

  updateAlertTimeLeft(timeLeft: number) {
    if (this.alertInstance) {
      Swal.update({
        text: `The system will sign you out in the next ${timeLeft.toFixed(0)} seconds!`,
      });
    }
  }

  tracker() {
   
    window.addEventListener("mousemove", this.eventHandler);
    window.addEventListener("scroll", this.eventHandler);
    window.addEventListener("keydown", this.eventHandler);
    window.addEventListener("click", this.eventHandler);
    window.addEventListener("mousedown", this.eventHandler);
    window.addEventListener("touchstart", this.eventHandler);
  }

  clear() {
    clearInterval(this.interval);

    window.removeEventListener("mousemove", this.eventHandler);
    window.removeEventListener("scroll", this.eventHandler);
    window.removeEventListener("keydown", this.eventHandler);
    window.removeEventListener("click", this.eventHandler);
    window.removeEventListener("mousedown", this.eventHandler);
    window.removeEventListener("touchstart", this.eventHandler);

    if (this.alertInstance) {
      this.alertInstance.close();
    }
  }



 reset(): void {
 
  this.lastActivityTime = Date.now();
}

stop(): void {
  this.clear(); 
}

}






























// import { Injectable } from "@angular/core";
// import Swal from "sweetalert2";
// import { TokenCookieService } from "./token-storage-cookies.service";

// @Injectable({
//   providedIn: "root",
// })
// export class IdleTimer {
//   private timeout: number;
//   private onTimeout: Function;
//   private eventHandler = () => {
//     this.updateExpiredTime();
//   };
//   private interval: any;
//   private timeoutTracker: any;

//   constructor(private tokenCookieService: TokenCookieService) {}

//   start({ timeout, onTimeout }) {
//     const { getUser, getToken } = this.tokenCookieService;
//     const currentUser = getUser();
//     const token = getToken();

//     if (currentUser) {
//       this.timeout = timeout;
//       this.onTimeout = onTimeout;
//       this.eventHandler = this.updateExpiredTime.bind(this);
//       this.tracker();
//       this.startInterval();
//     }
//   }

//   startInterval() {
//     this.updateExpiredTime();

//     this.interval = setInterval(() => {
//       const expiredTime = parseInt(localStorage.getItem("_expiredTime"), 10);
//       const timeLeft = (expiredTime - Date.now()) / 1000;

//       if (timeLeft <= this.timeout * 0.1) {
//         this.showWarningAlert(timeLeft);
//       }

//       if (expiredTime < Date.now()) {
//         if (this.onTimeout) {
//           this.onTimeout();
//           this.clear();
//         }
//       }
//     }, 1000);
//   }

//   showWarningAlert(timeLeft: number) {
//     Swal.fire({
//       title: "Warning!",
//       text: `The system will sign you out in the next ${timeLeft.toFixed(0)} seconds!`,
//       icon: "warning",
//       timer: timeLeft * 1000,
//       timerProgressBar: true,
//       showCancelButton: true,
//       confirmButtonText: "Stay Logged In",
//       cancelButtonText: "Sign Out",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Reset the timer or do nothing
//         this.updateExpiredTime();
//       } else {
//         // User chose to sign out
//         if (this.onTimeout) {
//           this.onTimeout();
//           this.clear();
//         }
//       }
//     });
//   }

//   updateExpiredTime() {
//     if (this.timeoutTracker) {
//       clearTimeout(this.timeoutTracker);
//     }
//     this.timeoutTracker = setTimeout(() => {
//       localStorage.setItem(
//         "_expiredTime",
//         (Date.now() + this.timeout * 1000).toString()
//       );
//     }, 300);
//   }

//   tracker() {
//     window.addEventListener("mousemove", this.eventHandler);
//     window.addEventListener("scroll", this.eventHandler);
//     window.addEventListener("keydown", this.eventHandler);
//   }

//   clear() {
//     clearInterval(this.interval);
//     window.removeEventListener("mousemove", this.eventHandler);
//     window.removeEventListener("scroll", this.eventHandler);
//     window.removeEventListener("keydown", this.eventHandler);
//     localStorage.removeItem("_expiredTime");
//   }
// }


















//************************************************************************************************************************* */
//************************************************************************************************************************* */



// import { Injectable } from "@angular/core";
// import {
//   MatSnackBar,
//   MatSnackBarHorizontalPosition,
//   MatSnackBarRef,
//   MatSnackBarVerticalPosition,
// } from "@angular/material/snack-bar";
// import { TokenCookieService } from "./token-storage-cookies.service";

// @Injectable({
//   providedIn: "root",
// })
// export class IdleTimer {
//   private timeout: number;
//   private onTimeout: Function;
//   private eventHandler = () => {
//     this.updateExpiredTime();
//   };
//   private interval: any;
//   private timeoutTracker: any;

//   private snackBarRef: MatSnackBarRef<any>;

//   constructor(
//     private snackBar: MatSnackBar,
//     private tokenCookieService: TokenCookieService
//   ) { }

//   start({ timeout, onTimeout }) {
//     const { getUser, getToken } = this.tokenCookieService;
//     const currentUser = getUser();
//     const token = getToken();

//     if (currentUser) {
//       this.timeout = timeout;
//       this.onTimeout = onTimeout;
//       this.eventHandler = this.updateExpiredTime.bind(this);
//       this.tracker();
//       this.startInterval();
//     }
//   }



//   startInterval() {
//     this.updateExpiredTime();

//     this.interval = setInterval(() => {
//       const expiredTime = parseInt(localStorage.getItem("_expiredTime"), 10);
//       const timeLeft = (expiredTime - Date.now()) / 1000;

//       if (timeLeft <= this.timeout * 0.1) {
//         this.showSnackBar(
//           `The system will sign you out in the next ${timeLeft.toFixed(
//             0
//           )} seconds!`
//         );
//       }

//       if (expiredTime < Date.now()) {
//         if (this.onTimeout) {
//           this.onTimeout();
//           this.clear();
//         }
//       }
//     }, 1000);
//   }

//   showSnackBar(message: string) {
//     if (!this.snackBarRef) {
//       this.snackBarRef = this.snackBar.open(message, "Close", {
//         horizontalPosition: "center",
//         verticalPosition: "top",
//         duration: 0,
//         panelClass: ["snackbar-danger", "login-snackbar"],
//       });
//     } else {
//       this.snackBarRef.instance.data = message;
//     }
//   }


//   updateExpiredTime() {
//     if (this.timeoutTracker) {
//       clearTimeout(this.timeoutTracker);
//     }
//     this.timeoutTracker = setTimeout(() => {
//       localStorage.setItem(
//         "_expiredTime",
//         (Date.now() + this.timeout * 1000).toString()
//       );
//     }, 300);
//   }

//   tracker() {
//     window.addEventListener("mousemove", this.eventHandler);
//     window.addEventListener("scroll", this.eventHandler);
//     window.addEventListener("keydown", this.eventHandler);
//   }

//   clear() {
//     clearInterval(this.interval);
//     window.removeEventListener("mousemove", this.eventHandler);
//     window.removeEventListener("scroll", this.eventHandler);
//     window.removeEventListener("keydown", this.eventHandler);
//     localStorage.removeItem("_expiredTime");

//     this.snackBarRef?.dismiss();
//     this.snackBarRef = null;
//   }


// }

//************************************************************************************************************************* */
//************************************************************************************************************************* */

// export class IdleTimer {

//   private timeout: number;
//   private onTimeout: Function;
//   private eventHandler = () => {
//     this.updateExpiredTime();
//   };
//   private interval: any;
//   private timeoutTracker: any;

//   constructor(
//     private snackBar: MatSnackBar,
//     private tokenCookieService: TokenCookieService
//   ) {}

//   start({ timeout, onTimeout }) {
//     const { getUser, getToken } = this.tokenCookieService;
//     const currentUser = getUser();
//     const token = getToken();

//     if (currentUser) {
//       this.timeout = timeout;
//       this.onTimeout = onTimeout;
//       this.eventHandler = this.updateExpiredTime.bind(this);
//       this.tracker();
//       this.startInterval();
//     }
//   }

//   startInterval() {
//     this.updateExpiredTime();

//     this.interval = setInterval(() => {
//       const expiredTime = parseInt(localStorage.getItem("_expiredTime"), 10);
//       const timeLeft = (expiredTime - Date.now()) / 1000;

//       if (timeLeft <= this.timeout * 0.1) {
//         this.showSnackBar(`The system will sign you out in the next ${timeLeft.toFixed(0)} seconds!`);
//       }

//       if (expiredTime < Date.now()) {
//         if (this.onTimeout) {
//           this.onTimeout();
//           this.clear();
//         }
//       }
//     }, 1000);
//   }

//   updateExpiredTime() {
//     if (this.timeoutTracker) {
//       clearTimeout(this.timeoutTracker);
//     }
//     this.timeoutTracker = setTimeout(() => {
//       localStorage.setItem("_expiredTime", (Date.now() + this.timeout * 1000).toString());
//     }, 300);
//   }

//   tracker() {
//     window.addEventListener("mousemove", this.eventHandler);
//     window.addEventListener("scroll", this.eventHandler);
//     window.addEventListener("keydown", this.eventHandler);
//   }

//   clear() {
//     clearInterval(this.interval);
//     window.removeEventListener("mousemove", this.eventHandler);
//     window.removeEventListener("scroll", this.eventHandler);
//     window.removeEventListener("keydown", this.eventHandler);
//     localStorage.removeItem("_expiredTime");
//   }

//   showSnackBar(message: string) {
//     const horizontalPosition: MatSnackBarHorizontalPosition = "end";
//     const verticalPosition: MatSnackBarVerticalPosition = "top";
//     const duration = 10000;
//     const panelClass = ["snackbar-danger", "login-snackbar"];

//     this.snackBar.open(message, "X", {
//       horizontalPosition,
//       verticalPosition,
//       duration,
//       panelClass,
//     });
//   }
// }
