import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  headers = new HttpHeaders().set("Content-Type", "application/json");
  baseURL = `${environment.baseUrlHR}/api/v1/employee`;
  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
  let API_URL = `${environment.clintUrl}/api/v1/ClientMaintenance/GetClient`;

  const headers = this.headers.set('skipToken', 'true');
  return this.http.post(API_URL, data, { headers }).pipe(
    map((res) => {
      return res || {};
    }),
    catchError(this.errorMgmt)
  );
}

  createMultiple(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/migrate`;
    return this.http.post(API_URL, data, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  searchClients(request: any): Observable<any> {
  const API_URL = `${environment.clintUrl}/api/v1/Shared/GetSystemSearch`;
  const headers = this.headers.set('skipToken', 'true');
  return this.http.post(API_URL, request, { headers }).pipe(
     map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }


getClientById(request: any): Observable<any> {
  const API_URL = `${environment.clintUrl}/api/v1/ClientMaintenance/GetClient`;
  const headers = this.headers.set('skipToken', 'true');
  return this.http.post(API_URL, request, { headers }).pipe(
    map((res) => res || {}),
    catchError(this.errorMgmt)
  );
}

  updateMultiple(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/migrate/update`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  headOfDepartments(): Observable<any> {
    let API_URL = `${this.baseURL}/heads/of/departments`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  read(): Observable<any> {
    let API_URL = `${this.baseURL}/all`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  readByStatus(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/fetchbyStatus`;
    return this.http
      .get(API_URL, { params:params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  readByStatusAndEnrollment(params: any): Observable<any> {
    let API_URL = `${environment.clintUrl}/api/v1/ClientMaintenance/GetClient`;
    return this.http
      .post(API_URL, { params:params, headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  readActive(): Observable<any> {
    let API_URL = `${this.baseURL}/all/approved`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
///api/v1/employee/find/by/id
// readByEmployeeId(params: any): Observable<any> {
//   let API_URL = `${this.baseURL}/find/by/id`;
//   return this.http
//     .get(API_URL, {
//       params: params,
//       headers: this.headers,
//       withCredentials: false,
//     })
//     .pipe(
//       map((res) => {
//         return res || {};
//       }),
//       catchError(this.errorMgmt)
//     );
// }
  ///api/v1/employee/find/by/emp_no
  readByEmployeePf(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/by/emp_no`;
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
  readActiveEmployeesWithMoreDetails(): Observable<any> {
    let API_URL = `${this.baseURL}/all/active/employees`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  readPending(): Observable<any> {
    let API_URL = `${this.baseURL}/all/pending`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  readDormant(): Observable<any> {
    let API_URL = `${this.baseURL}/all/dormant`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  readHold(): Observable<any> {
    let API_URL = `${this.baseURL}/all/onHold`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  restoreDormant(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/restoreDormant/${id}`;
    return this.http.put(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  restoreRemoved(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/restoreOnHold/${id}`;
    return this.http.put(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  approve(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/approve/${id}`;
    return this.http.put(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  hrmApproval(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/hrm/approval/${id}`;
    return this.http.put(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  supervisorApproval(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/supervisor/approval/${id}`;
    return this.http.put(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  directorApproval(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/director/approval/${id}`;
    return this.http.put(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  tempDelete(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/temp/delete/${id}`;
    return this.http.put(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  tempHold(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/temp/hold/${id}`;
    return this.http.put(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  //Permanently Delete Employee Completely

  permanentDelete(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/permanent/delete/${id}`;
    return this.http.delete(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  countEmployees() {
    let API_URL = `${this.baseURL}/count`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  countClosedEmployees() {
    let API_URL = `${this.baseURL}/count/closed/salary`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  countSalary() {
    let API_URL = `${environment.baseUrlHR}/api/v1/payroll/count/salary`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  findById(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/by/id/${id}`;
    return this.http.get(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  findByEmpNo(empNo: any): Observable<any> {
    let API_URL = `${this.baseURL}/find/by/emp_no/?empNo=${empNo}`;
    return this.http.get(API_URL, { withCredentials: false }).pipe(
      map((res) => {
        console.log(res);
        console.log("empno", empNo);
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // update(data: any): Observable<any> {
  //   let API_URL = `${this.baseURL}/update`;
  //   return this.http
  //     .put(API_URL, data, { headers: this.headers, withCredentials: false })
  //     .pipe(
  //       map((res) => {
  //         console.log("On Update Employee JSON", res);

  //         return res || {};
  //       }),
  //       catchError(this.errorMgmt)
  //     );
  // }

  // create(data: any): Observable<any> {
  //   return this.http.post(this.apiUrl, data);
  // }

  update(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${data.id}`, data);
  }

  readByEmployeeId(params: HttpParams): Observable<any> {
    const id = params.get('id');
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createPortal(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/create/portal`;
    return this.http
      .put(
        API_URL,
        {},
        { params: params, headers: this.headers, withCredentials: false }
      )
      .pipe(catchError(this.errorMgmt));
  }

  delete(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/delete`;
    return this.http.delete(API_URL, {params: params, headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    );
  }

  // restore(params: any): Observable<any> {
  //   let API_URL = `${this.baseURL}/restore-deleted`;
  //   return this.http.put(API_URL, {params: params, headers: this.headers, withCredentials: false }).pipe(map(res => {
  //     return res || {}
  //   }),
  //     catchError(this.errorMgmt)
  //   );
  // }

  restoreEmployee(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/restore-deleted`;
    return this.http.put(API_URL, {params: params, headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res 
    }),
      
    );
  }

  restore(processedRows: any): Observable<any> {
    const expenseUrl = `${this.baseURL}/restore-employees`;
    return this.http.put(expenseUrl, processedRows);
  }
  
  validateBulkEmployees(processedRows: any): Observable<any> {
    const expenseUrl = `${this.baseURL}/update/state`;
    return this.http.put(expenseUrl, processedRows);
  }
  ///bulk-update/to-user-management
  updateBulkEmployeesToUserManagement(processedRows: any): Observable<any> {
    const expenseUrl = `${this.baseURL}/bulk-update/to-user-management`;
    return this.http.put(expenseUrl, processedRows);
  }
  validateBulkPensionEnrollment(processedRows: any): Observable<any> {
    const expenseUrl = `${this.baseURL}/confirm/pensionable`;
    return this.http.put(expenseUrl, processedRows);
  }

 // /api/v1/employee/get_org_structure
 readStructureByEmpf(params: any): Observable<any> {
  let API_URL = `${this.baseURL}/get_org_structure`;
  return this.http.get(API_URL, {params:params, withCredentials: false }).pipe(
    map((res) => {
      return res || {};
    }),
    catchError(this.errorMgmt)
  );
}



  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = "";
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
