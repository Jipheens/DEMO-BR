import { DOCUMENT } from "@angular/common";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, map, of, tap } from "rxjs";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
import { environment } from "src/environments/environment.prod";

const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";

@Injectable({
  providedIn: "root",
})
export class TokenCookieService {

  headers = new HttpHeaders().set("Content-Type", "application/json");

  horizontalPosition: MatSnackBarHorizontalPosition = "end";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  private userSubject: BehaviorSubject<any>;
  public currentUser$: Observable<any>;


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar,
    private tokenCookieService: TokenCookieService
  ) { 
  const storedUser = this.getUser(); 
  this.userSubject = new BehaviorSubject<any>(storedUser);
  this.currentUser$ = this.userSubject.asObservable();
  }

 

  setValidUser(user: any) {
    this.userSubject.next(user);
  }

   public getRefreshToken(): string | null {
  const user = this.getUser();
  return user?.refreshToken || null;
}

  getValidUser() {
    return this.userSubject.value;
  }

  signOut(refreshToken: string): Observable<any> {
    const SIGNOUT_URL = `${environment.baseUrlAdmin}/api/v1/auth/logout`;



    const requestParams = new HttpParams().set("refreshToken", refreshToken);

    // Show a message to the user indicating that the page is reloading
    const snackBarRef = this._snackBar.open(
      "Logging out... Please wait.",
      null,
      {
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ["snackbar-success", "snackbar-success"],
      }
    );

    return this.http
      .put(SIGNOUT_URL, "data", {
        params: requestParams,
        observe: "response",
        headers: this.headers,
        withCredentials: true,
      })
      .pipe(
        tap(() => {
 
          this.deleteUser();

          // clear cookies
          const cookies = document.cookie.split(";");
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
          }

          // Hide the snackbar after a delay of 1.5 seconds
          setTimeout(() => {
            snackBarRef.dismiss();
          }, 1500);

          // Reload the current page after a delay of 2 seconds
          setTimeout(() => {
            location.reload();
          }, 2000);
        })
      );
  }

  public getToken(): string | null {
    // get the name of the cookie to retrieve
    const name = "accessToken";
    // split the document.cookie string into an array of individual cookies
    const cookieArray = document.cookie.split(";");
    // loop through the cookies to find the one with the matching name
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      //console.log("cookieArray: ", cookieArray)
      // remove any leading spaces from the cookie string
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      // if the cookie name matches the desired name, return the cookie value
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    // if the cookie was not found, return null
    return null;
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));

    if(user.token){
      this.setValidUser(user)
    }
  }

  public deleteUser(): void {
    window.localStorage.removeItem(USER_KEY);
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  clearCookies() {
    this.document.cookie.split(";").forEach((c) => {
      console.log("Cookie: ", c);
      console.log("this.document.cookie: ", this.document.cookie);
      this.document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  }

  navigateToExternalDashboard(
    userDomain: "HumanResourceModule" | "EmployeeSelfServiceModule"
  ): Observable<any> {
    const userJSON = window.localStorage.getItem(USER_KEY);
    let externalUrl = "";

    if (userJSON) {
      switch (userDomain) {
        case "HumanResourceModule":
          externalUrl = environment.clientUrlHR;
          break;
        case "EmployeeSelfServiceModule":
          externalUrl = environment.selfServiceUrlHR;
          break;
        default:
          this.throwError();
          break;
      }

      if (externalUrl) {
        this.setSharedRefreshTokenToCookie(JSON.parse(userJSON).refreshToken);
        // Redirect to the external URL
        window.location.href = externalUrl;
        return of({
          body: { statusCode: 200, entity: {}, message: "Success" },
        });
      } else {
        this.throwError();
      }
    } else {
      this.throwError();

    }
  }

  public setSharedRefreshTokenToCookie(userJSON: string) {
    const jsonString = JSON.stringify(userJSON);
    const bytes = new TextEncoder().encode(jsonString).length;
    console.log(`Size of userJSON in bytes: ${bytes}`);

    const cookieName = "sharedUserData";

    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 3600 * 1000); // 1 hour

    // Create the cookie string
    const cookieValue = `${cookieName}=${encodeURIComponent(
      userJSON
    )}; expires=${expirationDate.toUTCString()}; path=/`;

    // Set the cookie in the browser
    document.cookie = cookieValue;
  }


  public getSharedRefreshTokenFromCookie(): string {
    const cookieName = "sharedUserData";
    const cookieValue = `; ${document.cookie}`;
    const parts = cookieValue.split(`; ${cookieName}=`);
    if (parts.length === 2) {
      const value = decodeURIComponent(parts.pop().split(";").shift());
      return value;
    }
    return null;
  }
  public clearSharedTokenOrCookie() {
    const cookieName = "sharedUserData";
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }



  throwError() {
    this._snackBar.open(
      "You do not have the necessary permissions to access this resource!",
      "X",
      {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 20000,
        panelClass: ["snackbar-danger"],
      }
    );
  }
}
