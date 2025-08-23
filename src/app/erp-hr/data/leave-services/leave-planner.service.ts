import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class LeavePlannerService {


    headers = new HttpHeaders().set('Content-Type', 'application/json');

    baseURL2 = `${environment.baseUrlHR}/api/v1/leave/planner`;


    constructor(private http: HttpClient) { }



    //**************************************************************************************************************** */
    // LEAVE PLANNER
    //**************************************************************************************************************** */


    createEmployeeLeavePlanner(data: any): Observable<any> {
        let API_URL = `${this.baseURL2}/add`;
        return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
            console.log("Planner response", res)
            return res || {}
        }),
            catchError(this.errorMgmt)
        )
    }


    readPlanners(params: any): Observable<any> {
        // let API_URL = `${this.baseURL2}/find/by/DepartmentName/Roles/EmpPf/Status?DepartmentName=ICT%20Department&Roles=Senior%20Developer&EmpPf=1&Status=Pending&Month=August`;

        let API_URL = `${this.baseURL2}/find/by/DepartmentName/Roles/EmpPf/Status`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe(
            map((res) => {
                console.log("in service", res)
                return res || {}
            }),

            catchError(this.errorMgmt)
        )
    }

    readPlanner(params: any): Observable<any> {
        // let API_URL = `${this.baseURL2}/find/by/DepartmentName/Roles/EmpPf/Status?DepartmentName=ICT%20Department&Roles=Senior%20Developer&EmpPf=1&Status=Pending&Month=August`;

        let API_URL = `${this.baseURL2}/find/by/Year/DepartmentName/Roles/EmpPf/Status`;
        return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe(
            map((res) => {
                console.log("in service", res)
                return res || {}
            }),

            catchError(this.errorMgmt)
        )
    }

    readLeavePlannerByEmpNo(empPf: any): Observable<any> {
        let API_URL = `${this.baseURL2}/find/${empPf}`;
        return this.http.get(API_URL, { withCredentials: false })
            .pipe(
                map((res) => {
                    return res || {}
                }),
                catchError(this.errorMgmt)
            )
    }

    getAllLeavePlanners(): Observable<any> {
        let API_URL = `${this.baseURL2}/find/all`;
        return this.http.get(API_URL, { withCredentials: false })
            .pipe(
                map((res) => {
                    return res || {}
                }),
                catchError(this.errorMgmt)
            )
    }

    approvePlanner(id: any): Observable<any> {
        let API_URL = `${this.baseURL2}/hr/approval/${id}`;
        return this.http.put(API_URL, { withCredentials: false })
            .pipe(
                map((res) => {
                    return res || {}
                }),
                catchError(this.errorMgmt)
            )
    }
    updatePlanner(id: any, data: any): Observable<any> {
        let API_URL = `${this.baseURL2}/update/${id}`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe(
                map((res) => {
                    return res || {}
                }),
                catchError(this.errorMgmt)
            )
    }

    generate(params: any): Observable<any> {
        let API_URL = `${this.baseURL2}/download/leaveplanner/report`;
        return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false })
    }

    rejectPlanner(id: any, data: any): Observable<any> {
        let API_URL = `${this.baseURL2}/hr/return/${id}`;
        return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
            .pipe(
                map((res) => {
                    return res || {}
                }),
                catchError(this.errorMgmt)
            )
    }


    deletePlanner(id: any): Observable<any> {
        let API_URL = `${this.baseURL2}/delete/${id}`;
        return this.http.delete(API_URL, { withCredentials: false })
            .pipe(
                map((res) => {
                    return res || {}
                }),
                catchError(this.errorMgmt)
            )
    }

    validateBulkLeavePlanners(processedRows: any): Observable<any> {
        const expenseUrl = `${this.baseURL2}/update/state`;
        return this.http.put(expenseUrl, processedRows);
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
