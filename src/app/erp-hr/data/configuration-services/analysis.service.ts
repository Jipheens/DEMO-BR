import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  getCoreBankingDashboard() {
   let API_URL = `${this.baseURL}/analysis`;
    return this.http.get(API_URL, {headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }


  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = `${environment.baseUrlHR}/api/v1/dashboard`
  constructor(private http: HttpClient) { }


  getAdminAnalysis(params) {
    let API_URL = `${this.baseURL}/analysis`;
    return this.http.get(API_URL, { params:params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  readEmployeeInfo(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/all/directory`;
    return this.http.get(API_URL, {params:params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  readEmployeeInfoFilter(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/employee-by-search-id`;
    return this.http.get(API_URL, {params:params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  readEmployeeDetailInfo(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/employee/info`;
    return this.http.get(API_URL, {params:params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  
  getEmployeeAnalysis(params) {
    let API_URL = `${this.baseURL}/employee/analysis`;
    return this.http.get(API_URL, { params:params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  getWeeklyLoginSessions() {
    let API_URL = `${environment.baseUrlAdmin}/api/v1/auth/sessions/week`;
    return this.http.get(API_URL, {headers: this.headers, withCredentials: false})
    .pipe(
      map((res) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

 getUsersByRole(): Observable<any> {
    let API_URL = `${environment.baseUrlAdmin}/api/v1/users/fetchuserroles`;
    return this.http.get(API_URL, {headers: this.headers, withCredentials: false})
     }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
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
