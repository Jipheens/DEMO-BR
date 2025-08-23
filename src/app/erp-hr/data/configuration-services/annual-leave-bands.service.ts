import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AnnualLeaveBandsService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = `${environment.baseUrlHR}/api/v1/configurations/Annual_Leave_Band`;

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    console.log(data)
    let API_URL = `${this.baseURL}/create`;
    return this.http.post(API_URL, data, { headers: this.headers }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  findAll(): Observable<any> {
    let API_URL = `${this.baseURL}/all`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  findAllByStatus(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/fetchbyStatus`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  findById(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/${id}`;
    return this.http.get(API_URL, { withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  update(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/update`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  updateState(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/update/state`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  delete(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/delete`;
    return this.http.delete(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        catchError(this.errorMgmt)
      )
  }


  validateBulkHolidays(processedRows: any): Observable<any> {
    const expenseUrl = `${this.baseURL}/update/state`;
    return this.http.put(expenseUrl, processedRows);
  }

    getAll( ): Observable<any> {
      let url = `${this.baseURL}/all`;
          
      return this.http.get<any[]>(url);
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
