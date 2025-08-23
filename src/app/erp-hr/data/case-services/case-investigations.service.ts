import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, catchError, throwError } from "rxjs";
import { HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class CaseInvestigationMngtService {
  headers = new HttpHeaders().set("Content-Type", "application/json");
  baseURL = `${environment.baseUrlHR}/api/v1/case-management/investigation`;
  baseURL1 = `${environment.baseUrlHR}/api/v1/case-management`;

  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/create`;
    return this.http
      .post(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  createBulk(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/create/bulk`;
    return this.http
      .post(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  read(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/all/by/department/status`;
    return this.http
      .get(API_URL, {
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
  readForEmployee(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/all/by/emppf/status`;
    return this.http
      .get(API_URL, {
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
  ///api/v1/case-management/find/by/id
  findById(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/by/id`;
    return this.http
      .get(API_URL, { params: params, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  update(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/update`;
    return this.http
      .put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  uploadResults(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/results`;
    return this.http
      .put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  uploadShowCause(data: any): Observable<any> {
    let API_URL = `${this.baseURL1}/issue/show-cause`;
    return this.http
      .put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  uploadShowCauseResponse(data: any): Observable<any> {
    let API_URL = `${this.baseURL1}/respond/show-cause`;
    return this.http
      .put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  ///api/v1/case-management/final/verdict
  uploadCaseVerdict(data: any): Observable<any> {
    let API_URL = `${this.baseURL1}/final/verdict`;
    return this.http
      .put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  
  verify(dataToProcess: any): Observable<any> {
    let API_URL = `${this.baseURL}/update/state`;
    return this.http
      .put(API_URL, dataToProcess, {
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
  delete(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/delete/`;
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
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `${error.error.message}`;
    }
    return throwError(errorMessage);
  }
}
