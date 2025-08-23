import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = `${environment.baseUrlHR}/api/v2/payroll`;

  constructor(private http: HttpClient) { }

///api/v2/payroll/generate
  genSelectedPayrolls(params: any, data: any) {
    let API_URL = `${this.baseURL}/generate`;
    return this.http.post(API_URL, data, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  reGenSelectedPayrolls( data: any): Observable<any> {
    let API_URL = `${this.baseURL}/rerun/all`;
    return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  revisePayroll(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/revise`;
    return this.http.put(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  closePayroll(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/close`;
    return this.http.post(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  releasePayslips(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/open/payslips`;
    return this.http.put(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getActiveSalariedEmployees(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/active/employee/for/salary/`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }


  getPayrollsData(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/by/year/month/status/state`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getStatusAnalysis(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/count-status`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  sentToFinance(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/submit/to/finance`;
    return this.http.put(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getFinanceSalaryStatus(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/all/from/finance`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getPayslips(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/payslip/by/year/month/status/worktype/department`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getPayrollsPerEmpPF(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/by/empf/year`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getPayslipPerEmpPF(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/payslip/by/empf/year`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  ///api/v2/payroll/analysis/all
  getAllPayrollsAnalysis(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/analysis/all`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getPayrollsAnalysis(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/payroll/analysis`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  approvedSelectedPayrolls(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/verify`;
    return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  find(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/${id}`;
    return this.http.get(API_URL, { withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  updateState(param: any,data: any): Observable<any> {
    console.log(param);
    let API_URL = `${this.baseURL}/update/state`;
    return this.http.put(API_URL, data, { params: param, headers: this.headers, withCredentials: false })
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  rerunPayroll(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/revise`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  updatePayroll(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/update/`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  delete(param: any): Observable<any> {
    var API_URL = `${this.baseURL}/delete`;
    return this.http.delete(API_URL, { params: param, withCredentials: false })
      .pipe(
        catchError(this.errorMgmt)
      )
  }



  processPayslipEmails(params: any, processRecords: any) : Observable<any> {
    let API_URL = `${environment.baseUrlHR}/api/v1/reports/email/payslip`;
    return this.http.post(API_URL, processRecords, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
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
