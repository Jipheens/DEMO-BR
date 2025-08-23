import { Injectable } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { TokenCookieService } from "src/app/core/service/token-storage-cookies.service";

@Injectable({
  providedIn: "root",
})
export class AccessControlService {
  horizontalPosition: MatSnackBarHorizontalPosition = "end";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  currentUser: any;
  myPrivileges: any;

  constructor(
    private _snackBar: MatSnackBar,
    private tokenCookieService: TokenCookieService
  ) {
    this.currentUser = this.tokenCookieService.getUser();

    console.log("this.currentUser.id: From AccessControl Service: ", this.currentUser)

    // this.myPrivileges = JSON.parse(
    //   localStorage.getItem(`userPrivileges_${this.currentUser.id}`) || "{}"
    // );
  }


  hasPrivilege(clientName: string, requiredPrivileges: string[]): boolean {
    // const client = this.currentUser?.role.clients.find((element) => element.name === clientName);
  
    // if (!client) {
    //   return true;
    // }
  
    // let hasAccess = true;
    // requiredPrivileges.forEach((privilege) => {
    //   if (client.privileges.indexOf(privilege) !== -1) {
    //     hasAccess = true;
    //   }
    // });
  
    // if (!hasAccess) {
    //   this._snackBar.open(
    //     "You do not have the necessary permissions to access this resource!",
    //     "X",
    //     {
    //       horizontalPosition: this.horizontalPosition,
    //       verticalPosition: this.verticalPosition,
    //       duration: 20000,
    //       panelClass: ["snackbar-danger"],
    //     }
    //   );
    // }
  
    return true;
  }
  
  hasThePrivilege(clientName: string, requiredPrivileges: string[]): boolean {
    // const client = this.currentUser?.role.clients.find((element) => element.name === clientName);
  
    // if (!client) {
    //   return true;
    // }
  
    // let hasAccess = true;
    // requiredPrivileges.forEach((privilege) => {
    //   if (client.privileges.indexOf(privilege) !== -1) {
    //     hasAccess = true;
    //   }
    // });

  
    return true;
  }
  
// ****************************************************************************************************************************
hasAccessToPostImprestTransactions(): boolean {
  const requiredPrivileges = ['Post Imprest Transactions'];
  return this.hasThePrivilege('FinanceModule', requiredPrivileges);
}

hasAccessToPostSalaryTransactions(): boolean {
  const requiredPrivileges = ['Post Salary Transactions'];
  return this.hasThePrivilege('FinanceModule', requiredPrivileges);
}

hasAccessToHODFinanceApproval(): boolean {
  const requiredPrivileges = ['HOD Finance Approval'];
  return this.hasThePrivilege('FinanceModule', requiredPrivileges);
}

hasAccessToManagingDirectorAndCEO(): boolean {
  const requiredPrivileges = ['Managing Director And CEO'];
  return this.hasThePrivilege('FinanceModule', requiredPrivileges);
}

hasAccessToFinanceManager(): boolean {
  const requiredPrivileges = ['Finance Manager'];
  return this.hasThePrivilege('FinanceModule', requiredPrivileges);
}

hasAccessToSeniorFinanceManager(): boolean {
  const requiredPrivileges = ['Senior Finance Manager'];
  return this.hasThePrivilege('FinanceModule', requiredPrivileges);
}  
hasAccessToHeadOfFinanceAndStrategy(): boolean {
  const requiredPrivileges = ['Head of Finance And Strategy'];
  return this.hasThePrivilege('FinanceModule', requiredPrivileges);
}  

hasAccessToPostInternalPayable(): boolean {
  const requiredPrivileges = ['Post Internal Payable'];
  return this.hasThePrivilege('FinanceModule', requiredPrivileges);
}
hasAccessToPostExternalPayable(): boolean {
  const requiredPrivileges = ['Post External Payable'];
  return this.hasThePrivilege('FinanceModule', requiredPrivileges);
}
// Post Internal
// Post External
// ****************************************************************************************************************************


hasThisPrivilege(requiredPrivileges: string[]): boolean {
    let hasAccess = true;
    requiredPrivileges.forEach((privilege) => {
      if (this.myPrivileges.indexOf(privilege) !== -1) {
        hasAccess = true;
      }
    });

    return hasAccess;
  }


}

