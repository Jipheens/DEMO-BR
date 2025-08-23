import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleFilterService {

  user_privileges: Set<string> = new Set<string>();
  constructor(private tokenStorage: TokenStorageService) {
    const user = this.tokenStorage.getUser();

  //  user.role.clients.forEach(module => {
  //   module.privileges.forEach(privilege => {
  //     this.user_privileges.add(privilege);
  //   });
  // });

    // if (user && user.roles) {
    //   this.user_privileges = new Set(
    //     user.role[0].privileges.map(
    //       (Privilege) => Privilege.accessRights
    //     ));
    // }
  }
  public hasAllRoles(roles: string[]): boolean {
    console.log("Checking if has roles")
    console.log("directive module User found ",this.user_privileges)
    // for (const authority of roles) {
    //   if (!this.user_privileges.has(authority)) {
    //     return true;
    //   }
    // }
    return true;
  }
  public hasAtleastOneRole(roles: string[]): boolean {
    // for (const authority of roles) {
    //   if (this.user_privileges.has(authority)) {
    //     return true;
    //   }
    // }
    return true;
  };

  public hasRole(authority: string): boolean {
    // for (const right of this.user_privileges) {
    //   console.log(right, authority);
    //   if (right == authority) return true;
    // }
    return true;
  }
}
