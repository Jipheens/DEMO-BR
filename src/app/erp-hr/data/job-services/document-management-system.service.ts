import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { MatTableModule } from "@angular/material/table";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class DocumentManagementSystemService {
  headers = new HttpHeaders().set("Content-Type", "application/json");
  baseURL = `${environment.baseUrlApplicant}/api/v1/employee-documents`;
  admsBaseURL = `${environment.baseUrlApplicant}/api/v1/applicant-documents`;
  apiUrlApplicant = `${environment.baseUrlApplicant}/api/v1/applicant-documents`;

  constructor(private http: HttpClient) {}

  onUpload(data: any): Observable<any> {
    let API_URL = `${this.admsBaseURL}/create`
    return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(
        this.errorMgmt
      ))
  }


  approveEmployeeDocuments(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/approveOrReject`;
    //api/v1/employee-documents/approveOrReject
    return this.http
      .put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  rejectEmployeeDocuments(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/approveOrReject`;
    //api/v1/employee-documents/approveOrReject
    return this.http
      .put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  onBulkUpload(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/add/bulk`;
    console.log("Bulk Upload", API_URL);
    // /api/v1/employee-documents/add/bulk
    return this.http
      .post(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          console.log("On doc upload service", res);
          console.log("endpoint on doc upload", API_URL);
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  getDocumentsByReferenceId(refId: any): Observable<any> {
    let API_URL = `${this.baseURL}/get/by/reference/identifier/${refId}`;
    //api/v1/employee-documents/get/by/reference/identifier/{refId}
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  getPolicyDocument(): Observable<any> {
    let API_URL = `${this.baseURL}/get/onboarding/policy/doc`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  getBase64ById(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/get/base64file/${id}`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  getDocByType(docType: any): Observable<any> {
    let API_URL = `${this.baseURL}/get/by/document/type/${docType}`;
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  getAllDocs(): Observable<any> {
    let API_URL = `${this.baseURL}/fetchAll`;
    //api/v1/employee-documents/fetchAll
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  // deleteDoc(id: number):Observable<any>{
  //   let API_URL = `${this.baseURL}/permanent/delete/${id}`
  //   return this.http.delete(API_URL,{headers: this.headers, withCredentials: false}).pipe(
  //     map( res=>{
  //       return res || {}
  //     }), catchError(this.errorMgmt)
  //   )
  // }

  getDocumentsByReferenceId1(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/view/by/id`;
    return this.http
      .get(API_URL, {
        params: params,
        headers: this.headers,
        responseType: "text",
        withCredentials: false,
      })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  getDocumentsByReferenceId2(id: any): Observable<any> {
    let API_URL = `${this.baseURL}/get/base64file/${id}`;
    // http://localhost:8200/api/v1/employee-documents/get/by/reference/identifier?refId=12344567
    return this.http
      .get(API_URL, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  // /api/v1/employee-documents/get/base64file/{id}

  onDocView(params: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/pdf");
    let requestOptions: any = {
      params: params,
      headers: headers,
      responseType: "blob",
      withCredentials: false,
    };

    let API_URL = `${this.baseURL}/view/by/id`;
    return this.http.get(API_URL, requestOptions).pipe(
      map((response) => {
        return {
          data: new Blob([response], { type: "application/pdf" }),
        };
      })
    );
  }

  onDocView2(params: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append("Accept", "application/pdf");

    let requestOptions: any = {
      params: params,
      headers: headers,
      responseType: "blob",
      withCredentials: false,
    };

    let API_URL = `${this.baseURL}/view/by/id`;

    return this.http.get(API_URL, requestOptions).pipe(
      map((res) => {
        res || {};
      })
    );
  }

  onDocsView(params: any): Observable<any> {
    let API_URL = `${this.baseURL}/view/by/id`;
    return this.http
      .get(API_URL, {
        headers: this.headers,
        params: params,
        responseType: "blob",
        withCredentials: false,
      })
      .pipe(
        map((response) => {
          return {
            filename: "document",
            data: new Blob([response], { type: "application/pdf" }),
          };
        })
      );
  }

  getBase64Doc(params: any): Observable<any> {
    console.log("Base64 data");
    let API_URL = `${this.baseURL}/view/by/id`;
    return this.http
      .get(API_URL, {
        headers: this.headers,
        params: params,
        withCredentials: false,
      })
      .pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  updateDoc(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/update`;

    return this.http
      .put(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
        map((res) => {
          console.log("Response Data:", res); // Log the response data

          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  // APPLICANT DOCUMENT MANAGEMENT SYSTEM
  getDocumentsByReferenceIdFromAdms(params: any): Observable<any> {
    let API_URL = `${this.admsBaseURL}/get/by/reference/identifier/ref/Number`;
    // http://localhost:8200/api/v1/applicant-documents/get/by/reference/identifier/ref/Number?refId=67867678&refNo=287272782787
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

  getApplicantDocsBase64ById(id: any): Observable<any> {
    let API_URL = `${this.admsBaseURL}/find/by/id`;
    let queryParams = { id: id }; // Construct the query parameter object
    console.log("API URL:", API_URL);
    return this.http
      .get(API_URL, {
        params: queryParams,
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

  getDocByIdentifier(params): Observable<any> {
    let API_URL = `${this.apiUrlApplicant}/all`;
    console.log("On Doc URL", API_URL);
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

  deleteDoc(params): Observable<any> {
    let API_URL = `${this.admsBaseURL}/delete`;
    return this.http
      .delete(API_URL, {
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

  // TRANSFER FROM ADMS TO DMS

  //   http://localhost:8200/api/v1/employee-documents/transfer/from/adms

  transferAdmsToDms(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/transfer/from/adms`;
    return this.http
      .post(API_URL, data, { headers: this.headers, withCredentials: false })
      .pipe(
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

  updateDmsDoc(updatedData: any): Observable<any> {
    const API_URL = `${this.baseURL}/api/v1/employee-documents/update`;
    console.log("Update Employee Document URL", API_URL);

    return this.http
      .put(API_URL, updatedData, {
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
}
