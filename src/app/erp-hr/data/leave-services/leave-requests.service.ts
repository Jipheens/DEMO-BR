import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {


  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = `${environment.baseUrlHR}/api/v1/employee/leave`;
  baseURL4 = `${environment.baseUrlHR}/api/v1/employee`;

  constructor(private http: HttpClient) { }
  createEmployeeLeave(data: any): Observable<any> {

    let API_URL = `${this.baseURL}/create`;
    return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }


  getDaysApplied(data: any): Observable<any> {

    let API_URL = `${this.baseURL}/calculate-leave-days`;
    return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }

  ///api/v1/employee/leave/migrate
  createBulkEmployeeLeave(data: any): Observable<any> {

    let API_URL = `${this.baseURL}/migrate`;
    return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  updateEmployeeLeave(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/update`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  updateEmployeeLeave2(id: any, data: any): Observable<any> {
    let API_URL = `${this.baseURL}/update/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }

  getEmployeesLeaves(): Observable<any> {
    let API_URL = `${this.baseURL}/all`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }


  getAllEmployeesLeaves(): Observable<any> {
    let API_URL = `${this.baseURL}/find/all/leave`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  verify(params: any, dataToProcess: any): Observable<any> {
    let API_URL = `${this.baseURL}/update/state`;
    return this.http.put(API_URL, dataToProcess, { params: params, headers: this.headers, withCredentials: false }).pipe(map(res => {
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


  getDepartmentEmployees(departmentId: any): Observable<any> {
    let API_URL = `${this.baseURL4}/find/approved/employees/${departmentId}`;
    return this.http.get(API_URL, { withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  // http://3.140.250.115:6300/api/v1/employee/leave/find/approved/employees/32

  // /api/v1/employee/find/approved/employees/{department_id}

  //************************************************************************************************************************* */
  getEmployeesLeavesByCostCenter(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/leave-by-cost-center`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  getEmployeesLeavesByCostCenterAndReportingToPf(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/leave-by-cost-center-and-reporting-to-pf`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }


  getEmployeesLeavesByParameters(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/all/by/department/status/year`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  getEmployeesLeavesByPfNumber(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/all/by/emppf/status/year`;
    return this.http.get(API_URL, { params: params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  read(status: any): Observable<any> {
    let API_URL = `${this.baseURL}/all/detailed/leaves/${status}`;
    return this.http.get(API_URL, { withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  readById(params: any): Observable<any> {
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
  readPerEmployee(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/all/by/employee_fk/status`;

    return this.http.get(API_URL, { params: params, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  readPerEmployee2(empNo: any, status: any): Observable<any> {
    let API_URL = `${this.baseURL}/all/by/${empNo}/${status}`;
    console.log("API in service", API_URL);
    console.log("API in Swagger::/api/v1/employee/leave/all/by/{employee_fk}/{status}")
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getAllEmployeeLeaveDetalByStatus(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/all/active/employee/leave/detail/by/status`;
    return this.http.get(API_URL, { params: params, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getAllEmployeeLeaveDetalByStatusAndEmployeeId(params: any): Observable<any> {
    console.log("this params", params);

    let API_URL = `${this.baseURL}/all/active/employee/leave/detail/by/employee/and/status`;
    return this.http.get(API_URL, { params: params, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  getEmployeeLeaveId(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/${id}`;
    return this.http.get(API_URL, { withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  generateLeave(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/download/report`;
    return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false })
  }

  generateSelfServiceLeave(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/selfservice/report`;
    return this.http.get(API_URL, { headers: this.headers, params: params, responseType: 'arraybuffer', withCredentials: false })
  }

  getActiveEmployeeLeaveByDepartmentId(department_id: any): Observable<any> {
    console.log("this is data for the employ", department_id)
    let API_URL = `${this.baseURL}/find/active/leaves/by/department/${department_id}`;
    return this.http.get(API_URL, { withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getInactiveEmployeeLeaveByDepartmentId(department_id: any): Observable<any> {
    console.log("this is data for the employ", department_id)
    let API_URL = `${this.baseURL}/find/inactive/leaves/by/department/${department_id}`;
    return this.http.get(API_URL, { withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  getLeavesByEmployeeId(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/by/id`;
    return this.http.get(API_URL, { params: params, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
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
  getEmployeeLeaveByEmpNo(empNo: any): Observable<any> {

    //   /api/v1/employee/leave/find/by/empNo/{emp_No}
    let API_URL = `${this.baseURL}/find/by/empNo/${empNo}`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  getUnusedLeaves(): Observable<any> {
    let API_URL = `${this.baseURL}/leave/days/used/Unused`;
    return this.http.get(API_URL, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }

  employeeUpdateEmployeeLeave(id: any, data: any): Observable<any> {
    let API_URL = `${this.baseURL}/employee/update/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }


  closeEmployeeLeave(id: any, data: any): Observable<any> {
    let API_URL = `${this.baseURL}/hr/close/leave/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  directorUpdateEmployeeLeave(id: any, data: any): Observable<any> {
    let API_URL = `${this.baseURL}/director/update/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }

  supervisorApproveEmployeeLeave(id: any, data: any): Observable<any> {
    let API_URL = `${this.baseURL}/supervisor/approval/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  hrApproveEmployeeLeave(id: any, data: any): Observable<any> {
    let API_URL = `${this.baseURL}/hr/approval/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }

  approveLeave(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/leaveAction`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }

  approveEmployeeLeave(id: any, data: any): Observable<any> {
    let API_URL = `${this.baseURL}/approve/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }

  rejectEmployeeLeave(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/reject`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }

  directorApproveEmployeeLeave(id: any, data: any): Observable<any> {
    let API_URL = `${this.baseURL}/director/update/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }

  // Delete Property
  deleteEmployeeLeave(id: any): Observable<any> {
    // /api/v1/employee/leave/delete/permanent/{employeeLeaveId}
    let API_URL = `${this.baseURL}/delete/permament/${id}`;
    return this.http.delete(API_URL, { withCredentials: false })
      .pipe(
        map(res => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  deleteEmployeeLeave2(id: any): Observable<any> {
    // /api/v1/employee/leave/delete/permanent/{employeeLeaveId}
    let API_URL = `${this.baseURL}/delete/permanent/${id}`;
    return this.http.delete(API_URL, { withCredentials: false })
      .pipe(
        map(res => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  // sendLeaveRequestAlert(data: any): Observable<any> {
  //   let API_URL = `${this.baseURL}/alert`;
  //   return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
  //     return res || {}
  //   }),
  //     catchError(this.errorMgmt)
  //   )
  // }



  updateState(param: any,data: any): Observable<any> {
    console.log(param);
    let API_URL = `${this.baseURL}/update/state`;
    return this.http.put(API_URL, data, { params: param, headers: this.headers, withCredentials: false })
      .pipe(
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
