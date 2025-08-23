import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class EmployeeServiceOnBoarding {
  headers = new HttpHeaders().set("Content-Type", "application/json");
  baseURL2 = `${environment.baseUrlHR}/api/v1/onboarding`;

  constructor(private http: HttpClient) {}

  createOnboard(data: any): Observable<any> {
    let API_URL = `${this.baseURL2}/add`;
    return this.http.post(API_URL, data, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  readAllOnboardee(): Observable<any> {
    let API_URL = `${this.baseURL2}/onboarded`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  findOnboardeeById(employeeId: number): Observable<any> {
    let API_URL = `${this.baseURL2}/find/${employeeId}`;
    return this.http.get(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  readSuccessfulOnboardee(): Observable<any> {
    let API_URL = `${this.baseURL2}/onboarded`;
    return this.http.get(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  readPendingOnboardee(): Observable<any> {
    let API_URL = `${this.baseURL2}/pending`;
    return this.http.get(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  updateOnboardee(data: any): Observable<any> {
    let API_URL = `${this.baseURL2}/update`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  deleteOnboarding(id: any): Observable<any> {
    let API_URL = `${this.baseURL2}/permanent/delete/${id}`;
    return this.http.delete(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `${error.error.message}`;
    }
    return throwError(errorMessage);
  }
}
