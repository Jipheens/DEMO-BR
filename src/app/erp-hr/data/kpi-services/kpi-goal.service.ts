import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class KpiGoalService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = `${environment.baseUrlHR}/api/v1/kpi/goals`;

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/create`;
    return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getKPIsData(): Observable<any> {
    let API_URL = `${this.baseURL}/all`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getEmployeeKPIsData(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/all/by/employee`
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  getEmployeeKPIsScoreData(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/scores`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  generateScoreExcel(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/report/excel`;
    return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false })
  }
  getKPIEmployeesByCostCenter(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/employee-kpi-by-cost-center`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  getKPIEmployees(params: any) {
    let API_URL = `${this.baseURL}/employeekpi`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getKPIScores(params: any) {
    let API_URL = `${this.baseURL}/employeekpi`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  update(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/update`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  submit(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/submit`;
    return this.http.put(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  sentToFinance(params: any) {
    let API_URL = `${this.baseURL}/submit/to/finance`;
    return this.http.put(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getFinanceSalaryStatus(params: any) {
    let API_URL = `${this.baseURL}/find/all/from/finance`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getPayslips(params: any) {
    let API_URL = `${this.baseURL}/find/payslip/by/year/month/status/state`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getKPIsPerEmpPF(params: any) {
    let API_URL = `${this.baseURL}/find/by/empf/year`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getPayslipPerEmpPF(params: any) {
    let API_URL = `${this.baseURL}/find/payslip/by/empf/year`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getKPIsAnalysis(params: any) {
    let API_URL = `${this.baseURL}/find/KPI/analysis`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  approvedSelectedKPIs(data: any) {
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
  updateState(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/update/state`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  appraisalApprove(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/appraisal/approve`;
    return this.http.put(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  rerunKPI(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/revise`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  updateKPI(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/update/`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  deleteKPI(param: any): Observable<any> {
    var API_URL = `${this.baseURL}/delete`;
    return this.http.delete(API_URL, { params: param, withCredentials: false })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  appraisal(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/appraisal`;
    return this.http.put(API_URL, {}, { params: params, headers: this.headers, withCredentials: false })
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
