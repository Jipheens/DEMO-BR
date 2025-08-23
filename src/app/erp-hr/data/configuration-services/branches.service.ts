import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";



@Injectable({
  providedIn: "root",
})
export class BranchesService {

  constructor(private http: HttpClient) { }

  
  getBranches(): Observable<any> {
    const BranchessUrl = `${environment.baseUrlAdmin}/api/v1/users/branches`;
    return this.http.get<any[]>(BranchessUrl);
  }
  getBranchesById(id: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrlHR}/api/tax_categories/${id}`);
  }


  addBranches(data: any): Observable<any> {
    const BranchessUrl = `${environment.baseUrlHR}/api/tax_categories/add`;
    return this.http.post<any>(BranchessUrl, data);
  }

  updateBranches(BranchesDetails: any): Observable<any> {
    const updateBillUrl = `${environment.baseUrlHR}/api/tax_categories/update`;
    return this.http.put<any>(updateBillUrl, BranchesDetails)
  }


  deleteBranchesPemanently(id: any): Observable<any> {
    const BranchessUrl = `${environment.baseUrlHR}/api/tax_categories/delete/${id}`;
    return this.http.delete<any>(BranchessUrl, id);
  }


    // ********************************************************************************************************************



}
