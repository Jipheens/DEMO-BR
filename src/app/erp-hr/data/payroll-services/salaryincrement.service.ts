import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SalaryIncrementService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = `${environment.baseUrlHR}/api/v1/payroll/salary/increment`;
  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/create`;
    return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    );
  }
  read(): Observable<any> {
    let API_URL = `${this.baseURL}/find/all`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  readByStatus(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/fetchbyStatus`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  update(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/update`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    );
  }
  updateState(data: any): Observable<any> {
    console.log(data);
    let API_URL = `${this.baseURL}/update/state`;
    return this.http.put(API_URL, data,{ headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    );
  }
  approve(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/approve`;
    return this.http.put(API_URL, {},{ params: params, headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    );
  }
  delete(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/delete`;
    let httpParams = new HttpParams().set('id', params);
    return this.http.delete(API_URL, {params: httpParams, headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    );
  }

  validateBulkSalaryIncrements(processedRows: any): Observable<any> {
    const expenseUrl = `${this.baseURL}/update/state`;
    return this.http.put(expenseUrl, processedRows);
  }

  deleteAll(): Observable<any> {
      const API_URL = `${this.baseURL}/delete/all`;
      return this.http.delete(API_URL, {
         headers: this.headers,
        withCredentials: false,
      }).pipe(
        map((res) => res || {}),
        catchError(this.errorMgmt)
      );
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

