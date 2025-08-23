import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SharedDocumentService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = `${environment.baseUrlHR}/api/v1/shareddocuments`;
  constructor(private http: HttpClient) { }

create(data: any): Observable<any> {
  const API_URL = `${this.baseURL}/create`;

  const isFormData = data instanceof FormData;
  const headers = isFormData
    ? new HttpHeaders({ /* any auth headers, but NO content-type */ })
    : this.headers;      

  return this.http
    .post(API_URL, data, { headers, withCredentials: false })
    .pipe(
      map(res => res || {}),
      catchError(this.errorMgmt)
    );
}


downloadDocument(id: number): Observable<HttpResponse<Blob>> {
  const API_URL = `${this.baseURL}/download/${id}`;
  return this.http.get<Blob>(API_URL, {
    responseType: 'blob' as 'json',
    observe: 'response',
    headers: new HttpHeaders({
    })
  }).pipe(
    catchError(this.errorMgmt.bind(this)) 
  );
}






  createBulk(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/create/bulk`;
    return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    );
  }
  read(params:any): Observable<any> {
    let API_URL = `${this.baseURL}/all`;
    return this.http.get(API_URL, {params:params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  readByStatusAndDocType(params:any): Observable<any> {
    let API_URL = `${this.baseURL}/all-by-docType`;
    return this.http.get(API_URL, {params:params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  ///api/v1/shareddocuments/find/by/id
  readById(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/by/id`;
    return this.http.get(API_URL, {params:params, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
// /api/v1/shareddocuments/all-by-docType?docType=csc&status=sdas
  findByDocumentType(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/all-by-docType`;
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

  verify(dataToProcess: any): Observable<any> {
    let API_URL = `${this.baseURL}/update/state`;
    return this.http.put(API_URL, dataToProcess,{headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    );
  }

  ///api/v1/shareddocuments/delete
  // delete(params: any): Observable<any> {
  //   let API_URL = `${this.baseURL}/delete`;
  //   return this.http.delete(API_URL, {params: params, headers: this.headers, withCredentials: false }).pipe(map(res => {
  //     return res || {}
  //   }),
  //     catchError(this.errorMgmt)
  //   );
  // }
delete(id: number): Observable<any> {
  const API_URL = `${this.baseURL}/delete`;

  const params = new HttpParams().set('id', id.toString());

  return this.http.delete(API_URL, {
    params: params,
    headers: this.headers,
    withCredentials: false
  }).pipe(
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
