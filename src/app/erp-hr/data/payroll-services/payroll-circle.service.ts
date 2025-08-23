import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class PayrollCircleService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = `${environment.baseUrlHR}/api/v2/payroll/circle`;

  constructor(private http: HttpClient) { }
  
  open(params:any) : Observable<any> {
    let API_URL = `${this.baseURL}/open`;
    return this.http.post(API_URL, {},{params:params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  findAll(): Observable<any> {
    let API_URL = `${this.baseURL}/all`;
    return this.http.get(API_URL,{ withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  close(params:any) : Observable<any> {
    let API_URL = `${this.baseURL}/close`;
    return this.http.post(API_URL, {},{params:params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  reopen(params:any) : Observable<any> {
    let API_URL = `${this.baseURL}/reopen`;
    return this.http.post(API_URL, {},{params:params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `${error.error.message}`;
    }
    return throwError(errorMessage);
  }
}
