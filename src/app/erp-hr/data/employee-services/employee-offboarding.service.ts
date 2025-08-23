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
export class EmployeeServiceOffBoarding {
  headers = new HttpHeaders().set("Content-Type", "application/json");
  baseURL3 = `${environment.baseUrlHR}/api/v1/onboarding`;

  constructor(private http: HttpClient) {}

  createOffboard(data: any): Observable<any> {
    let API_URL = `${this.baseURL3}/add`;
    return this.http.post(API_URL, data, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  readAllOffboardee(): Observable<any> {
    let API_URL = `${this.baseURL3}/off-boarded`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  readIncompleteOffboardee(): Observable<any> {
    let API_URL = `${this.baseURL3}/pending`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  readAllOffboardee1(): Observable<any> {
    let API_URL = `${this.baseURL3}/off-boarded`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  findOffboardeeById(employeeId: number): Observable<any> {
    let API_URL = `${this.baseURL3}/find/${employeeId}`;
    return this.http.get(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  readSuccessfulOffboardee(): Observable<any> {
    let API_URL = `${this.baseURL3}/off-boarded`;
    return this.http.get(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  readPendingOffboardee(): Observable<any> {
    let API_URL = `${this.baseURL3}/pending`;
    return this.http.get(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update Offboarding
  updateOffboardee(data: any): Observable<any> {
    let API_URL = `${this.baseURL3}/update`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Delete Offboarding

  deleteOffnboarding(id: any): Observable<any> {
    let API_URL = `${this.baseURL3}/permanent/delete/${id}`;
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
