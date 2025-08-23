import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { NotificationServiceService } from "src/@core/Models/Notification/notification-service.service";
import { OrganizationService } from "src/app/erp-hr/data/configuration-services/organization.service";
import { PrivilegeService } from "src/app/erp-hr/data/PrivilegeService";

@Component({
  selector: "app-organization",
  templateUrl: "./organization.component.html",
  styleUrls: ["./organization.component.sass"],
})
export class OrganizationComponent implements OnInit {
  btnText: any;
  loading: boolean = false;
  $destroy: Subject<boolean> = new Subject<boolean>();
  results: any;
  formData: FormGroup;

  downloadLoading: boolean = false;
  posting: boolean = false;
  showForm: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private organizationAPI: OrganizationService,
    private privilegeService: PrivilegeService,
    private notificationAPI: NotificationServiceService
  ) {}
  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.complete();
  }
  // hasPrivilege(componentName: string): boolean {
  //   return this.privilegeService.checkPrivilege(componentName);
  // }
  fuction_type: any = ["ADD", "UPDATE"];
  ngOnInit(): void {
    this.generateForm();
    this.getPage();
  }

  generateForm(data?: any) {
    this.formData = this.fb.group({
      address: [data ? data.address : "", Validators.required],
      alternativeBankAccountNo: [data ? data.alternativeBankAccountNo : ""],
      alternativeBankName: [data ? data.alternativeBankName : ""],
      bankAccountNo: [""],
      bankName: [""],
      branchCode: ["001"],
      building: [data ? data.building : ""],
      businessNo: [data ? data.businessNo : ""],
      country: [data ? data.country : ""],
      county: [data ? data.county : ""],
      email: [data ? data.email : "", Validators.required],
      floor: [data ? data.floor : ""],
      id: [data ? data.id : ""],
      kraPin: [data ? data.kraPin : "", Validators.required],
      location: [data ? data.location : ""],
      mapLink: [data ? data.mapLink : ""],
      organizationName: [data ? data.organizationName : ""],
      payBillNo: [data ? data.payBillNo : ""],
      status: [data ? data.status : ""],
      street: [data ? data.street : ""],
      telephone: [data ? data.telephone : ""],
      tillNo: [data ? data.tillNo : ""],
      website: [data ? data.website : ""],
    });
  }

  getData() {
    this.loading = true;
    this.organizationAPI.find().subscribe({
      next: (res) => {
        if (res.statusCode === 302) {
          this.results = res.entity[0];
          this.generateForm(this.results);
          console.log(this.results);

          this.loading = false;
          this.btnText = "UPDATE";
        } else {
          this.loading = false;
          this.btnText = "SUBMIT";
        }
      },
      error: (err) => {
        this.loading = false;
        this.notificationAPI.alertWarning("ERROR!");
      },
      complete: () => {
        this.showForm = true;
      },
    });
  }
  pageFunction = "Add";
  getPage() {
    if (this.fuction_type[0] == "ADD") {
      this.pageFunction = "Add";
      this.getData();
    } else if (this.fuction_type[1] == "UPDATE") {
      this.pageFunction = "Update";
      this.getData();
    }
  }

  onSubmit() {
    this.loading = true;
    if (this.formData.valid) {
      if (this.fuction_type[0] == "ADD") {
        this.organizationAPI
          .create(this.formData.value)
          .pipe(takeUntil(this.$destroy))
          .subscribe({
            next: (res) => {
              if (res.statusCode === 201) {
                this.loading = false;
                this.notificationAPI.alertSuccess(res.message);
                // this.router.navigate(["/administration"], {
                //   skipLocationChange: true,
                // });
              } else {
                this.loading = false;
                this.notificationAPI.alertWarning(res.message);
              }
            },
            error: (err) => {
              this.loading = false;
              this.notificationAPI.alertWarning("ERROR!");
            },
            complete: () => {},
          });
      }
    } else if (this.formData.invalid) {
      this.loading = false;
      this.notificationAPI.alertWarning("Organization Form Data is Invalid");
    }

    if (this.fuction_type[1] == "UPDATE") {
      if (this.formData.valid) {
        this.organizationAPI
          .update(this.formData.value)
          .pipe(takeUntil(this.$destroy))
          .subscribe({
            next: (res) => {
              if (res.statusCode === 200) {
                this.loading = false;
                this.notificationAPI.alertSuccess(res.message);
                // this.router.navigate(["/administration"], {
                //   skipLocationChange: true,
                // });
              } else {
                this.loading = false;
                this.notificationAPI.alertWarning(res.message);
              }
            },
            error: (err) => {
              this.loading = false;
              this.notificationAPI.alertWarning("ERROR!");
            },
            complete: () => {},
          });
      } else {
        this.loading = false;
        this.notificationAPI.alertWarning("Organization Form Data is Invalid");
      }
    }
  }

  cancel() {
    this.router.navigate(["/erp-hr/dashboard"]);
  }
}
