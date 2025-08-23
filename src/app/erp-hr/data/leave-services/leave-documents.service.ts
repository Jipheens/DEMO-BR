import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class LeaveDocumentsService {


    headers = new HttpHeaders().set('Content-Type', 'application/json');

    baseURL3 = `${environment.baseUrlHR}/api/v1/leave-documents`;

    constructor(private http: HttpClient) { }



    //**************************************************************************************************************** */
    // Leave Documents
    //**************************************************************************************************************** */

    uploadLeaveDocument(data: any): Observable<any> {

        let API_URL = `${this.baseURL3}/add/employee-leave/doc`;
        return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
            return res || {}
        }),
            catchError(this.errorMgmt)
        )
    }

    uploadBulkLeaveDocuments(data: any): Observable<any> {

        let API_URL = `${this.baseURL3}/add/bulk/employee-leave/doc`;
        return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
            return res || {}
        }),
            catchError(this.errorMgmt)
        )
    }

    getUploadedDocuments(params: any): Observable<any> {

        let API_URL = `${this.baseURL3}/get/by/reference/identifier`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe(map(res => {
            return res || {}
        }),
            catchError(this.errorMgmt)
        )
    }




    // Error handling
    errorMgmt(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Sorry! ${error.error.message}`;
        }
        return throwError(errorMessage);
    }


}
