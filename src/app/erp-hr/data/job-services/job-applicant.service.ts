import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class JobApplicantAPIService {
  // baseURL4: `${environment.baseUrlHR}/api/v1/applicant`
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL4 = `${environment.baseUrlHR}/api/v1/applicant`;

  constructor(private http: HttpClient) { }

  readSuccessfulApplicants(): Observable<any> {
    let API_URL = `${this.baseURL4}/find/all/successful/applicants`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe(
      map(res => res || {}),
      catchError(this.errorMgmt)
    );
  }

  readSuccessfulApplicantById(id: number): Observable<any> {
    let API_URL = `${this.baseURL4}/find/by/id/${id}`;
    return this.http.get(API_URL, { withCredentials: false }).pipe(
      map(res => res || {}),
      catchError(this.errorMgmt)
    );
  }

  findByRefNumber(ref_number: any): Observable<any> {
    let API_URL = `${this.baseURL4}/find/ref_number/${ref_number}`;
    return this.http.get(API_URL, { withCredentials: false }).pipe(
      map(res => res || {}),
      catchError(this.errorMgmt)
    );
  }

  validateBulkJobs(processedRows: any): Observable<any> {
    const expenseUrl = `${this.baseURL4}/update/state`;
    return this.http.put(expenseUrl, processedRows).pipe(
      map(res => res || {}),
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
