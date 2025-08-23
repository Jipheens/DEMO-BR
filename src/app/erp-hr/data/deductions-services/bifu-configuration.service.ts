import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BifuConfigurationService {
 headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = `${environment.baseUrlHR}/api/v1/configurations/Bifu`;

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
    let API_URL = `${this.baseURL}/all`;
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
  readById(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/by/id`;
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
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      
      return res || {}
    }),
      catchError(this.errorMgmt)
    );
  }
  
  delete(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/delete`;
    return this.http.delete(API_URL, {params:params, headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    );
  }

  verify(processedRows: any): Observable<any> {
    const expenseUrl = `${this.baseURL}/update/state`;
    return this.http.put(expenseUrl, processedRows);
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
