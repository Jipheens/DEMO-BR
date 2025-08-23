import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class ReportService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = `${environment.baseUrlHR}/api/v1/reports`;
  baseExcelURL = `${environment.baseUrlHR}/api/v1/reports/export`;
  baseExcelFinanceURL = `${environment.baseUrlFinance}/api/v1/salaries`;
  constructor(private http: HttpClient) { }

  transferReports(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/transfer/employee/all`;
    return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false })
  }
  
  generate(params: any): Observable<any> {
    let API_URL = `${this.baseExcelURL}/generate`;
    return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false })
  }
  generateRegister(params: any): Observable<any> {
    let API_URL = `${this.baseExcelURL}/generate/company-register`;
    return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false })
  }
  generateMasterRegister(params: any): Observable<any> {
    let API_URL = `${this.baseExcelURL}/generate/master-register`;
    return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false })
  }
  generateAnalysis(params: any): Observable<any> {
    let API_URL = `${this.baseExcelURL}/generate/analysis`;
    return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false })
  }
  payslip(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/payslip/${id}`;
    return this.http.get(API_URL, { headers: this.headers, responseType: 'blob', withCredentials: false })
      .pipe(map((response) => {
        return {
          filename: 'payslip.pdf',
          data: new Blob([response], { type: 'application/pdf' })
        };
      }));
  }



  downloadApprovedPayroll(periodM: string, periodY: number): Observable<any> {
    const params = new HttpParams()
      .set("periodM", periodM)
      .set("periodY", periodY.toString());
      let API_URL = `${environment.baseUrlFinance}/api/v1/report/download/salary_attachment`;
    return this.http.get(API_URL, { params: params, responseType: 'blob', observe: 'response' });
    // return this.http.get('/api/v1/report/download/salary_attachment', {
    //   params: params,
    //   responseType: 'blob',
    //   observe: 'response'
    // });
  }
  
  employeeKPIQuarterly(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/kpi/employee`;
    return this.http.get(API_URL, {params:params, headers: this.headers, responseType: 'blob', withCredentials: false })
      .pipe(map((response) => {
        return {
          filename: 'Quarterly KPI Report.pdf',
          data: new Blob([response], { type: 'application/pdf' })
        };
      }));
  }
  employeeKPIAnnualy(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/kpi/employee/annual`; 
    return this.http.get(API_URL, {params:params, headers: this.headers, responseType: 'blob', withCredentials: false })
      .pipe(map((response) => {
        return {
          filename: 'Annualy KPI Report.pdf',
          data: new Blob([response], { type: 'application/pdf' })
        };
      }));
  }

  generateP9form(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/p9form/${id}`;
    return this.http.get(API_URL, { headers: this.headers, responseType: 'blob', withCredentials: false })
      .pipe(map((response) => {
        return {
          filename: 'Employee_P9_Form.pdf',
          data: new Blob([response], { type: 'application/pdf' })
        };
      }));
  }
 
  generateEmployeeP9form(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/employee/p9form`;
    return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'blob', withCredentials: false })
      .pipe(map((response) => {
        return {
          filename: 'Employee_P9_Form.pdf',
          data: new Blob([response], { type: 'application/pdf' })
        };
      }));
  }


  employeeLeave(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/leave/employee`;
    return this.http.get(API_URL, {params:params, headers: this.headers, responseType: 'blob', withCredentials: false })
      .pipe(map((response) => {
        return {
          filename: 'Leave Report.pdf',
          data: new Blob([response], { type: 'application/pdf' })
        };
      }));
  }

  downloadAllEmployeesLeaveReport(params: any): Observable<any> {
    const headers = new HttpHeaders().set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    const requestOptions: any = {
      params: params,
      headers: headers,
      responseType: 'arraybuffer', 
      withCredentials: false,
    };
    let API_URL = `${this.baseURL}/leave/employee/all`;
    return this.http.get(API_URL, requestOptions).pipe(
      map((response: ArrayBuffer) => { 
        return {
          filename: 'All_Leave_Report.xlsx',
          data: new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }),
        };
      })
    );
  }

  downloadAllEmployeesLeaveHistoryReport(params: any): Observable<any> {
    const headers = new HttpHeaders().set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    const requestOptions: any = {
      params: params,
      headers: headers,
      responseType: 'arraybuffer', 
      withCredentials: false,
    };
    let API_URL = `${this.baseURL}/leave/employee/all/history`;
    return this.http.get(API_URL, requestOptions).pipe(
      map((response: ArrayBuffer) => { 
        return {
          filename: 'All_Leave_Report.xlsx',
          data: new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }),
        };
      })
    );
  }

  downloadBlockLeaveReport(params: any): Observable<any> {
    const headers = new HttpHeaders().set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    const requestOptions: any = {
      params: params,
      headers: headers,
      responseType: 'arraybuffer', 
      withCredentials: false,
    };
    let API_URL = `${this.baseURL}/leave/employee/block_leave_application`;
    return this.http.get(API_URL, requestOptions).pipe(
      map((response: ArrayBuffer) => { 
        return {
          filename: 'Block_Leave_Report.xlsx',
          data: new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }),
        };
      })
    );
  }
  downloadEmployeesDetails(): Observable<any> {
    const headers = new HttpHeaders().set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    const requestOptions: any = {
      headers: headers,
      responseType: 'arraybuffer', 
      withCredentials: false,
    };
    let API_URL = `${this.baseURL}/export/employees`;
    return this.http.get(API_URL, requestOptions).pipe(
      map((response: ArrayBuffer) => { 
        return {
          filename: 'Employee Details.xlsx',
          data: new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }),
        };
      })
    );
  }

  downloadEmployeesLeaveBalances(params: any): Observable<any> {
    const headers = new HttpHeaders().set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    const requestOptions: any = {
      params: params,
      headers: headers,
      responseType: 'arraybuffer', 
      withCredentials: false,
    };
    let API_URL = `${this.baseURL}/all/leave/balances/report`;
    return this.http.get(API_URL, requestOptions).pipe(
      map((response: ArrayBuffer) => { 
        return {
          filename: 'Employee Leave Balances.xlsx',
          data: new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }),
        };
      })
    );
  }

  //APPROVAL AUDITS REPORT baseExcelFinanceeURL baseExcelFinanceURL
  generateApprovalAuditReport(params: any): Observable<any> {
    let API_URL = `${this.baseExcelFinanceURL}/download-payroll-audit-report`;
    return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false })
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `${error.error.message}`;
    }
    return throwError(errorMessage);
  }
}