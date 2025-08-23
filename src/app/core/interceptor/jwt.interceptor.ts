import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenCookieService } from "../service/token-storage-cookies.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private tokenCookieService: TokenCookieService) {}

  // intercept(
  //   request: HttpRequest<any>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<any>> {
  //   let currentUser = this.tokenCookieService.getUser();
  //   if (currentUser) {
  //     const accessToken = currentUser.token;
  //     const headers = new HttpHeaders({
  //       Authorization: `${"Bearer " + accessToken}`,
  //       UserName: `${currentUser.username}`,
  //       DepartmentCode: `${currentUser.departmentCode}`,
  //       BranchCode: `${currentUser.branchCode}`,
  //       CostCenterCode: `${currentUser.costCenterCode}`,
  //       MemberCode: `${currentUser.empPfNo}`,
  //     });

  //     const cloneReq = request.clone({ headers, withCredentials: false });
  //     return next.handle(cloneReq);
  //   }
  //   if (!currentUser) {
  //     const cloneReq = request.clone({
  //       withCredentials: false,
  //     });
  //     return next.handle(cloneReq);
  //   }
  //   return next.handle(request.clone());
  // }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  // Check if the skipToken header is present
  if (request.headers.has('skipToken')) {
    // Remove skipToken header and forward request without adding token
    const cleanHeaders = request.headers.delete('skipToken');
    const cleanRequest = request.clone({ headers: cleanHeaders, withCredentials: false });
    return next.handle(cleanRequest);
  }

  let currentUser = this.tokenCookieService.getUser();
  if (currentUser) {
    const accessToken = currentUser.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
      UserName: currentUser.username,
      DepartmentCode: currentUser.departmentCode,
      BranchCode: currentUser.branchCode,
      CostCenterCode: currentUser.costCenterCode,
      MemberCode: currentUser.empPfNo,
    });

    const cloneReq = request.clone({ headers, withCredentials: false });
    return next.handle(cloneReq);
  }

  // No user, forward request as is without token
  return next.handle(request.clone({ withCredentials: false }));
}

}
