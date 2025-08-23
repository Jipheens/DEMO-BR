import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class ExitManagementService {
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    baseURL = `${environment.baseUrlHR}/api/v1/employee-exits`;

    constructor(private http: HttpClient) { }

    create(data: any): Observable<any> {
        let API_URL = `${this.baseURL}/add`;
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
        return this.http.get(API_URL, { params: params,headers: this.headers, withCredentials: false })
            .pipe(
                map((res) => {
                    return res || {}
                }),
                catchError(this.errorMgmt)
            )
    }

    readByEmpNoAndStatus(params: any): Observable<any> {
        let API_URL = `${this.baseURL}/fetchbyEmpnoAndStatus`;
        return this.http.get(API_URL, { params: params,headers: this.headers, withCredentials: false })
            .pipe(
                map((res) => {
                    return res || {}
                }),
                catchError(this.errorMgmt)
            )
    }

    findById(params: any): Observable<any> {
        let API_URL = `${this.baseURL}/find/by/id`;
        return this.http.get(API_URL, { params: params, withCredentials: false })
            .pipe(
                map((res) => {
                    return res || {}
                }),
                catchError(this.errorMgmt)
            )
    }

    getExitDocumentTemplate(params: any): Observable<Blob> {
    let API_URL = `${this.baseURL}/leavers-form`;
    return this.http.get(API_URL, { 
        params: params, 
        withCredentials: false,
        responseType: 'blob' 
    }).pipe(
        catchError(this.errorMgmt)
    );
}


    update(data: any): Observable<any> {
        let API_URL = `${this.baseURL}/update`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
            return res || {}
        }),
            catchError(this.errorMgmt)
        );
    }

    scheduleExitInterview(data: any): Observable<any> {
        let API_URL = `${this.baseURL}/schedule-interview`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
            return res || {}
        }),
            catchError(this.errorMgmt)
        );
    }
    interviewResults(data: any): Observable<any> {
        let API_URL = `${this.baseURL}/interview-outcome`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
            return res || {}
        }),
            catchError(this.errorMgmt)
        );
    }
    verify(dataToProcess: any): Observable<any> {
        let API_URL = `${this.baseURL}/update/state`;
        return this.http.put(API_URL, dataToProcess, { headers: this.headers, withCredentials: false }).pipe(map(res => {
            return res || {}
        }),
            catchError(this.errorMgmt)
        );
    }
    delete(params: any): Observable<any> {
        let API_URL = `${this.baseURL}/delete`;
        return this.http.delete(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe(map(res => {
            return res || {}
        }),
            catchError(this.errorMgmt)
        );
    }


    //********************************************* */
    createBulk(data: any): Observable<any> {
        let API_URL = `${this.baseURL}/create/bulk`;
        return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
            return res || {}
        }),
            catchError(this.errorMgmt)
        );
    }
    //********************************************* */



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
