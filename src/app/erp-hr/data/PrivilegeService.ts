import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PrivilegeService {
  checkPrivilege(componentName: string): boolean {
    if (componentName == "Default") {
      return true;
    } else {
      const userJson = JSON.parse(localStorage.getItem("auth-user"));
      if(userJson == null || userJson == "" || userJson == "{}"){
        return false;
      }else{
        // Traverse through the user JSON to find the component name and its associated privileges
      for (const module of userJson.role.clients) {
        if (module.privileges.includes(componentName)) {
          return true;
        }
      }
      }
      return false;
    }
  }
}
