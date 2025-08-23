import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class JobInterviewAPIService {
  // baseURL3: `${environment.baseUrlHR}/api/v1/job/interviews`
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL3 = `${environment.baseUrlHR}/api/v1/job/application`;
  baseURL = `${environment.baseUrlHR}/api/v1/job/interview`;

  constructor(private http: HttpClient) { }

  scheduleInterview(data: any): Observable<any> {
    let API_URL = `${this.baseURL3}/interview_schedule`;
    return this.http.put(API_URL, data, { withCredentials: false }).pipe(
      map(res => res || {}),
      catchError(this.errorMgmt)
    );
  }

  interviewResults(data: any): Observable<any> {
    let API_URL = `${this.baseURL3}/interview_result`;
    return this.http.put(API_URL, data, { withCredentials: false }).pipe(
      map(res => res || {}),
      catchError(this.errorMgmt)
    );
  }
  verify(processedRows: any): Observable<any> {
    const expenseUrl = `${this.baseURL}/update/state`;
    return this.http.put(expenseUrl, processedRows);
  }

  delete(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/delete`;
    return this.http
      .delete(API_URL, {
        params: params,
        headers: this.headers,
        withCredentials: false,
      })
      .pipe(
        map((res) => {
          return res || {};
        }),
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
