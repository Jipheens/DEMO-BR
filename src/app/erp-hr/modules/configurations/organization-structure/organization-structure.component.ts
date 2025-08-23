import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/erp-hr/data/employee-services/employee-management.service";
import { OrgChart } from "d3-org-chart";

import * as d3 from "d3";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { EmployeesLookupComponent } from "src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component";

interface EmployeeData {
  name: string;
  cssClass: string;
  image: string;
  title: string;
  childs: EmployeeData[];
}

interface Employee {
  empNo: string;
  image: string | null;
  name: string;
  title: string;
  department: string;
  gender: string;
  childs: Employee[];
}
@Component({
  selector: "app-organization-structure",
  templateUrl: "./organization-structure.component.html",
  styleUrls: ["./organization-structure.component.scss"],
})
export class OrganizationStructureComponent implements OnInit {
  Form: FormGroup;

  constructor(
    private dialog: MatDialog,
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      empNo: ["NA"],
    });
    this.Form.valueChanges.subscribe(() => {
      this.getStructureData();
    });

    this.getStructureData();
  }

  nodes: any[] = [];
  orgChartData: EmployeeData[] = [];
  loading: boolean = false;
  convertedData: any[] = [];

  // getData() {
  //   this.loading = true;
  //   this.dataSource = new MatTableDataSource([]);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;

  //   this.selectedStatus = this.Form.value.status;

  //   let params = {
  //     costcentercode: this.Form.value.costCenterCode,
  //     Status: this.Form.value.status,
  //     year: this.Form.value.year,
  //   };

  //   this.leaveRequestService
  //     .getEmployeesLeavesByCostCenter(params)

  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe({
  //       next: (res) => {
  //         if (res.statusCode === 302) {
  //           this.data = res.entity;
  //           console.log("Leave Requests displayed on table", this.data);

  //           this.loading = false;
  //           this.dataSource = new MatTableDataSource(this.data);
  //           this.dataSource.paginator = this.paginator;
  //           this.dataSource.sort = this.sort;
  //         } else {
  //           this.loading = false;
  //         }
  //       },
  //       error: (err) => {
  //         this.loading = false;
  //         this.notificationAPI.alertWarning("Server Error:  " + err.message);
  //       },
  //       complete: () => { },
  //     });
  // }

  getStructureData() {
    this.loading = true;

    let params = {
      empNo: this.Form.value.empNo,
    };

    console.log("getStructureData", params);

    this.employeeService.readStructureByEmpf(params).subscribe({
      next: (res) => {
        console.log("this.getStructureData", res.entity);

        this.nodes = res.entity;
        if (this.nodes) {
          this.orgChartData = this.transformData(this.nodes);

          this.convertedData = this.convertData(this.nodes);
        }
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  //************************************************************************************************************************************ */
  convertData(apiData: Employee[]): any[] {
    const convertEmployee = (
      employee: Employee,
      parentId: string | null
    ): any => {
      const convertedEmployee: any = {
        name: employee.name,
        imageUrl: "/assets/images/user/general.jpg",
        area: "Corporate",
        profileUrl: "",
        office: `${employee.department}`,
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: `${employee.title}`,
        id: employee.empNo,
        parentId: parentId,
        size: "",
      };

      return convertedEmployee;
    };

    const flattenData = (data: Employee[], parentId: string | null): any[] => {
      let result: any[] = [];
      data.forEach((employee) => {
        result.push(convertEmployee(employee, parentId));
        if (employee.childs && employee.childs.length > 0) {
          result = result.concat(flattenData(employee.childs, employee.empNo));
        }
      });
      return result;
    };

    return flattenData(apiData, null);
  }

  //************************************************************************************************************************************ */

  test(event: any) { }

  transformData(data: any[]): EmployeeData[] {
    return data.map((employee) => ({
      name: employee.name,
      cssClass: "ngx-org-ceo",
      image: employee.image || "assets/images/user/usrs.svg",
      title: `${employee.title || ""}, ${employee.department || "N.A"}`,
      childs: this.transformChildData(employee.childs),
    }));
  }

  transformChildData(children: any[]): EmployeeData[] {
    return children.map((child) => ({
      name: child.name,
      cssClass: "ngx-org-ceo",
      image: child.image || "assets/images/user/usrs.svg",
      title: `${child.title || ""}, ${child.department || "N.A"}`,
      childs: this.transformChildData(child.childs),
    }));
  }

  data: any;
  renderChart() {
    d3.json(
      "https://gist.githubusercontent.com/bumbeishvili/dc0d47bc95ef359fdc75b63cd65edaf2/raw/c33a3a1ef4ba927e3e92b81600c8c6ada345c64b/orgChart.json"
    ).then((data) => {
      this.data = data;
    });
  }

  //*********************************************************************************************************************************************************** */
  employeeLookup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "800px";
    dialogConfig.data = {
      action: "SingleEmployee",
    };
    const dialogRef = this.dialog.open(EmployeesLookupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res && res.data && res.data.length > 0) {
        this.Form.patchValue({
          empNo: res.data[0].empNo,
        });
      }
    });
  }
}
