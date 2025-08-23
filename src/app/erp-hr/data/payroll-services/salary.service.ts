import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = `${environment.baseUrlHR}/api/v2/payroll/`;
  constructor(private http: HttpClient) { }

  getSalarySummary(params: any): Observable<any> {
    let API_URL = `${environment.baseUrlHR}/api/v2/payroll/summary/per/month&year`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  getYearSalarySummary(params: any): Observable<any> {
    let API_URL = `${environment.baseUrlHR}/api/v2/payroll/summary/per/year`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  getEmployeeSalarySummary(params: any): Observable<any> {
    let API_URL = `${environment.baseUrlHR}/api/v2/payroll/employee/summary/per/year`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  getPayrollYears(): Observable<any> {
    let API_URL = `${environment.baseUrlHR}/api/v2/payroll/years`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  commitEmployeeSalary(id: any): Observable<any> {
    let API_URL = `${environment.baseUrlHR}/hr/commit//${id}`;
    return this.http.put(API_URL, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  commitAllEmployeeSalary(): Observable<any> {
    let API_URL = `${environment.baseUrlHR}/api/v1/payroll/commit/all/employee/salary`;
    return this.http.put(API_URL, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  getEmployeeLastMonthsSalary(employee_id: any): Observable<any> {
    let API_URL = `${this.baseURL}employee/list/six/months/${employee_id}`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      console.log(API_URL);
      console.log(res);
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  getSalaryByYearAndMonth(params: any): Observable<any> {
    let API_URL = `${environment.baseUrlHR}/api/v1/payroll/salary/detail/per/year/month`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  getSalary(): Observable<any> {
    let API_URL = `${this.baseURL}`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  countPaidEmployees(department_id: any): Observable<any> {
    console.log("hey server", department_id)
    let API_URL = `${environment.baseUrlHR}/api/v1/payroll/count/paid/department/employees/${department_id}`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  getCurrentMonthSalaryDetail() {
    let API_URL = `${environment.baseUrlHR}/api/v1/payroll/salary/current/month/salary/detail`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  getUnCommitedSalary(): Observable<any> {
    let API_URL = `${environment.baseUrlHR}/api/v1/payroll/salary/not/commited`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    );
  }
  getMonthlySalary(): Observable<any> {
    let API_URL = `${environment.baseUrlHR}/api/v1/payroll/yearly/salary`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  getDepartmentMonthlySalary(department_id: any): Observable<any> {
    let API_URL = `${environment.baseUrlHR}/api/v1/payroll/yearly/salary/by/department/${department_id}`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  getEmployees() {
    let API_URL = `${this.baseURL}/all`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  find(id: number): Observable<any> {
    let API_URL = `${this.baseURL}/find/${id}`;
    return this.http
      .get(API_URL, {
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
  getEmployeeId(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/${id}`;
    return this.http.get(API_URL, { withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  updateEmployee(id: string | null, data: any): Observable<any> {
    return this.http.put(this.baseURL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  updateBasicSalary(id: any, params: any): Observable<any> {
    let API_URL = `${environment.baseUrlHR}/api/v1/payroll/update/${id}`;
    return this.http.put(API_URL, {}, { params: params, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  deleteEmployee(id: any): Observable<any> {
    var API_URL = `${this.baseURL}/delete/${id}`;
    return this.http.delete(API_URL, { withCredentials: false })
      .pipe(
        catchError(this.errorMgmt)
      )
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
