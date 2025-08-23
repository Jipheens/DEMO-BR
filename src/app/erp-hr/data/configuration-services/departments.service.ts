import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";



@Injectable({
  providedIn: "root",
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<any> {
    const DepartmentssUrl = `${environment.baseUrlAdmin}/api/v1/users/departments`;
    return this.http.get<any[]>(DepartmentssUrl);
  }
  
  getDepartmentsById(params: any): Observable<any> {
    const DepartmentssUrl = `${environment.baseUrlHR}/api/tax_categories`;

    return this.http.put<any>(DepartmentssUrl, { params })

  }


  addDepartments(data: any): Observable<any> {
    const DepartmentssUrl = `${environment.baseUrlHR}/api/tax_categories/add`;
    return this.http.post<any>(DepartmentssUrl, data);
  }

  updateDepartments(DepartmentsDetails: any): Observable<any> {
    const DepartmentssUrl = `${environment.baseUrlHR}/api/tax_categories/update`;
    return this.http.put<any>(DepartmentssUrl, DepartmentsDetails)
  }


  deleteDepartmentsPemanently(params: any): Observable<any> {
    const DepartmentssUrl = `${environment.baseUrlHR}/api/tax_categories`;

    return this.http.delete<any>(DepartmentssUrl, { params })

  }




  // ********************************************************************************************************************



}
