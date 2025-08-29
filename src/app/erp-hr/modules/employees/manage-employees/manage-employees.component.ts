import { DatePipe } from "@angular/common";
import { HttpParams } from "@angular/common/http";
import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl, FormArray } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router, ActivatedRoute } from "@angular/router";
import { Subject, takeUntil, Subscription, BehaviorSubject } from "rxjs";
import { TokenStorageService } from "src/app/core/service/token-storage.service";
import { EmployeeService } from "src/app/erp-hr/data/employee-services/employee-management.service";
import { EmployeesLookupComponent } from "src/app/erp-hr/hr-lookups/configurations-lookups/employees-lookup/employees-lookup.component";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
import { COUNTRIES } from "./countries";
import { MockDataService } from "../mock-data.service";
import { FilesService } from "src/app/shared/services/files.service";

interface Address {
  AddressTypeID: string;
  Address1: string;
  Address2?: string;
  CityID: string;
  CountryID: string;
  Mobile: string;
  Email: string;
  IsMailingAddress: boolean;
  CreatedBy: string;
  CreatedOn: string;
  UpdateCount: number;
}

interface NextOfKin {
  ID?: number;
  ClientID: string;
  RelatedClientID: string;
  RelationID: string;
  RelationRefNo: number;
  Remarks: string;
  SharePercent: number;
  UpdateCount: number;
  CreatedBy: string;
  CreatedOn: string;
}

interface EmploymentDetail {
  companyName: string;
  workPosition: string;
  startDate: string;
  endDate: string;
}

interface Director {
  id?: number;
  clientName: string;
  relation: string;
  share: number;
}

interface ClientFormData {
  ClientID: string;
  ClientTypeID: string;
  ID1: string;
  Name: string;
  TitleID: string;
  FirstName: string;
  MiddleName?: string;
  LastName: string;
  GenderID: string;
  DateOfBirth: string;
  IsDOBGiven: boolean;
  NationalityID: string;
  ResidentID: string;
  PassportNo?: string;
  IDExpiryDate?: string;
  NumberOfHouseMembers: number;
  IsSalaried: boolean;
  OccupationID?: string;
  CompanyName?: string;
  RegistrationNumber?: string;
  RegisteredAt?: string;
  DateOfRegistration?: string;
  NatureOfBusiness?: string;
  Comments?: string;
  OpenedBy: string;
  OpenedOn: string;
  CreatedBy: string;
  CreatedOn: string;
  RegistratedAt?: string;
  RegisteredOffice?: string;
  BusinessDescription?: string;
  OpenedDate?: string;
  NoOfEmployee?: number;
  WFClientStatusID?: string;
  UpdateCount?: number;
  NationalId: string;
  CanDonateBlood: boolean;
  CanSendGreetings: boolean;
  CanSendOurSpecialOffers: boolean;
  CanSendAssociateSpecialOffer: boolean;
  eStatementRequired: boolean;
  MobileAlertRequired: boolean;
  IdentificationTypeID: string;
  KRAPin: string;
  Email2?: string;
  PhysicalAddress: string;
  PersonalPhone?: string;
  //PersonalEmail?: string;
  AlternativePhone?: string;
  AlternativeEmail?: string;
  DisabledRegNo?: string;
  Disabled?: boolean;
  Addresses: Address[];
  NextOfKin: NextOfKin[];
  EmploymentDetails: EmploymentDetail[];
  Directors?: Director[];
  ParentClientID1?: string;
  ParentClientID2?: string;
  RelationshipManager?: string;
  Website?: string;
  Constitution?: string; 
}

@Component({
  selector: "app-manage-employees",
  templateUrl: "./manage-employees.component.html",
  styleUrls: ["./manage-employees.component.sass"],
})
export class ManageEmployeesComponent implements OnInit, OnDestroy {
  showForm = true;
  isLoading = true;
  pageFunction = "Add";
  mngForm: FormGroup;
  corporateForm: FormGroup;
  directorForm: FormGroup;
  workExpForm: FormGroup; 
  nextOfKinForm: FormGroup;
  selectedParTranIndex1: number | null = null;
  selectedParTranIndex4: number | null = null;
  selectedDirectorIndex: number | null = null;
  currentUser: any;
  currentUserCode: any;
  formData: ClientFormData;
  destroy$: Subject<boolean> = new Subject<boolean>();
  prefillClientId: string = '';
  downloadLoading: boolean = false;
  hideSubmit = false;
  hideApprovals: boolean = true;
  approvalVisible: boolean = false;
  disableActions = false;
  requestCode: any;
  requestId: any;
  posting: boolean = false;
  viewMode: boolean = false;
  directorsForm: FormGroup;
  showDirectorsForm = false;
  directorActionLabel = 'Add';
  editingDirectorIndex: number | null = null;
  showParTranForm1: boolean = false;
  showParTranForm4: boolean = false;
  parTranAction1: string = 'Add';
  parTranAction4: string = 'Add';

  dataSource1 = new MatTableDataSource<NextOfKin>([]);
  dataSource4 = new MatTableDataSource<EmploymentDetail>([]);
  dataSourceDirectors = new MatTableDataSource<Director>([]);

  @ViewChild(MatPaginator) paginator1!: MatPaginator;
  @ViewChild(MatSort) sort1!: MatSort;
  @ViewChild(MatPaginator) paginator4!: MatPaginator;
  @ViewChild(MatSort) sort4!: MatSort;
  @ViewChild(MatPaginator) paginatorDirectors!: MatPaginator;
  @ViewChild(MatSort) sortDirectors!: MatSort;


displayedColumns1: string[] = [
  "RelatedClientID", 
  "RelationID",
  "Remarks",
  "SharePercent",
  "action",
];

    displayedColumns4: string[] = [
    "id",
    "companyName",
    "workPosition",
    "startDate",
    "endDate",
    "action",
  ];

  displayedDirectorColumns: string[] = ['id', 'clientName', 'relation', 'share', 'action'];

  titleOptions = ['MR', 'MRS', 'MISS', 'DR', 'PROF', 'ENG','MS','US'];
  clientTypeOptions = ['Corporate', 'Minor', 'Employee', 'Individual'];
  identificationTypeOptions = ['ID', 'Alien ID', 'Passport', 'Military ID'];
  residentStatusOptions = [
    'Kenyan - Resident', 
    'Kenyan - Non Resident', 
    'Foreigner Resident', 
    'Foreigner Non-Resident', 
    'Minor - Local', 
    'Minor- Foreigner'
  ];
  genderOptions = ['M', 'F'];
  relationOptions = ['S', 'P', 'C', 'O']; 
  
  relationshipManagers = [
    { id: '020606', name: 'ANUP JANTILAL SOLANKI' },
    { id: '020607', name: 'JOHN DOE' },
    { id: '020608', name: 'JANE SMITH' },
  ];

    documentTypes = [
    { SubCodeID: "D", CodeDescription: "Document", DisplayOrder: 5 },
    { SubCodeID: "F", CodeDescription: "Fingerprint", DisplayOrder: 6 },
    { SubCodeID: "K", CodeDescription: "Tax Identification Number", DisplayOrder: 4 },
    { SubCodeID: "L", CodeDescription: "Log Book", DisplayOrder: 0 },
    { SubCodeID: "N", CodeDescription: "National ID", DisplayOrder: 1 },
    { SubCodeID: "P", CodeDescription: "Passport Photo", DisplayOrder: 2 },
    { SubCodeID: "S", CodeDescription: "Signature", DisplayOrder: 3 }
  ];

  documentTypeIds = [
    { SubCodeID: "C", CodeDescription: "Copy", DisplayOrder: 1 },
    { SubCodeID: "O", CodeDescription: "Original", DisplayOrder: 0 }
  ];

  mimeTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/gif",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];

  documentsDataSource = new BehaviorSubject<AbstractControl[]>([]);
  documentsDisplayColumns = [
    "id",
    "documentType",
    "documentTypeId",
    "description",
    "mimeType",
    "remarks",
    "selectFile",
    "download",
    "action",
  ];
  countries = COUNTRIES;
  cities = COUNTRIES; 
  directorsInputFilter: string;
  initialClientType: string = '';
  nextOfKinArray: any;
  documentRows: FormArray = this.fb.array([]);
  documentsForm: FormGroup = this.fb.group({ documentDetails: this.documentRows });
  isDocumentDataLoading: boolean = true;
  isFileLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private fb: FormBuilder,
    private tokenStorageService: TokenStorageService,
    private snackbar: SnackbarService,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private dialog: MatDialog,
    private datePipe: DatePipe,
    private mockDataService: MockDataService,
    private filesService: FilesService
    
  ) {
    this.currentUser = 'Jipheens';
    this.currentUserCode = 'CSK-00280';
    this.initializeForms();
  }


ngOnInit(): void {
  this.route.queryParams.subscribe((params) => {
    console.log("params: ", params);
       if (params.ClientTypeID) {
      this.initialClientType = params.ClientTypeID;
    }

    if (params.prefillClientId && params.requestCode) {
      this.prefillClientId = params.requestCode;
      console.log("Prefill Client ID set to:", this.prefillClientId);
    }

    if (params.requestCode && params.requestCode.trim() !== '') {
      this.requestCode = params.requestCode;
      this.requestId = params.requestId;
      this.pageFunction = params.action;
      console.log("Page function set to:", this.pageFunction, "with Client ID:", this.requestCode);

      if (this.pageFunction === "Add" && params.prefillClientId) {
        console.log("Add mode with prefill - skipping data fetch, going straight to form");
        this.getPage();
      } else if (this.pageFunction === "View" || this.pageFunction === "Update") {
        this.getDataById(this.requestCode);
      } else {
        this.getPage();
      }
    } else {
      this.pageFunction = "Add";
      console.log("No valid clientId, setting pageFunction to Add");
      this.getPage();
    }
    this.showForm = true;
  });
}

  ngAfterViewInit() {
  if (this.paginator1 && this.sort1) {
    this.dataSource1.paginator = this.paginator1;
    this.dataSource1.sort = this.sort1;
  }
  if (this.paginator4 && this.sort4) {
    this.dataSource4.paginator = this.paginator4;
    this.dataSource4.sort = this.sort4;
  }
  if (this.paginatorDirectors && this.sortDirectors) {
    this.dataSourceDirectors.paginator = this.paginatorDirectors;
    this.dataSourceDirectors.sort = this.sortDirectors;
  }
}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private initializeForms(): void {
    this.mngForm = this.fb.group({});
    this.corporateForm = this.fb.group({});
    this.directorForm = this.fb.group({});
    this.generateSubForm1();
    this.generateSubForm4();
    this.generateDirectorForm();
  }

  private handleQueryParams(params: any): void {
    if (params.prefillClientId && params.requestCode) {
      this.prefillClientId = params.requestCode;
    }

    if (params.requestCode && params.requestCode.trim() !== '') {
      this.requestCode = params.requestCode;
      this.requestId = params.requestId;
      this.pageFunction = params.action;

      if (this.pageFunction === "Add" && params.prefillClientId) {
        this.getPage();
      } else if (this.pageFunction === "View" || this.pageFunction === "Update") {
        this.getDataById(this.requestCode);
      } else {
        this.getPage();
      }
    } else {
      this.pageFunction = "Add";
      this.getPage();
    }
    this.showForm = true;
  }

getDataById(requestCode: string) {
  const formattedRequest = {
    RequestID: this.generateRandomId(),
    RequestData: {
      ClientID: requestCode
    },
    RequestTime: new Date().toISOString(),
    AppName: "CLIENT_DATA"
  };
  this.isLoading = true;
  console.log("Fetching data for Client ID:", requestCode, "with payload:", formattedRequest);
  this.employeeService.getClientById(formattedRequest).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.Details) {
            this.formData = res.Details;
            console.log("getDataById this.formData: ", this.formData);
            if (this.pageFunction === "View") {
              this.activateViewMode();
            }

          this.getPage();
          
          setTimeout(() => {
            this.onPopulateTables(res);
          });

            this.showForm = true;
          } else {
            this.snackbar.showNotification("snackbar-danger", res.ResponseMessage);
          }
        },
        error: (err) => {
          this.snackbar.showNotification("snackbar-danger", err.ResponseMessage);
        },
        complete: () => { },
      });
  }

 onPopulateTables(res: any): void {
    const entity = res.Details || res.entity || res;
    
    if (entity.NextOfKin) {
      this.dataSource1.data = entity.NextOfKin;
      this.refresh1();
    }
    
    if (entity.EmploymentDetails) {
      this.dataSource4.data = entity.EmploymentDetails;
      this.refresh4();
    }
    
    if (entity.Directors) {
      this.dataSourceDirectors.data = entity.Directors;
      this.refreshDirectors();
    }
    if (entity.Addresses) {
    this.populateAddresses(entity.Addresses);
  }
      if (entity.Documents) {
      this.populateDocuments(entity.Documents);
    }
  }

private populateAddresses(addresses: any[]): void {
  while (this.addresses.length > 0) {
    this.addresses.removeAt(0);
  }
  
  if (addresses && addresses.length > 0) {
    addresses.forEach(address => {
      this.addAddress(address);
    });
  } else {
    this.addAddress();
  }
}

  getPage(): void {
    if (this.pageFunction === "Add") {
      this.generateForm();
      this.generateCorporateForm();
      this.hideApprovals = true;

     if (this.initialClientType) {
      this.mngForm.patchValue({
        ClientTypeID: this.initialClientType
      });
      this.onClientTypeChange(); 
    }

      if (this.isCorporateClient()) {
        this.dataSourceDirectors.data = [];
        this.refreshDirectors();
      }
    } else if (this.pageFunction === "Update") {
      this.generateForm(this.formData);
      this.generateCorporateForm(this.formData);
      this.generateSubForm1();
      this.hideApprovals = true;
    } else if (this.pageFunction === "View") {
      this.generateForm(this.formData);
      this.generateCorporateForm(this.formData);
      this.generateSubForm1();
      this.hideSubmit = true;
      this.hideApprovals = true;
      this.activateViewMode();
    }
  }

  activateViewMode(): void {
    this.viewMode = true;
    this.mngForm.disable();
    this.corporateForm?.disable();
    this.directorsForm?.disable();
  }

  generateForm(formData?: ClientFormData): void {
   // const clientType = formData?.ClientTypeID || this.route.snapshot.queryParams.clientType || 'Individual';
    const clientType = formData?.ClientTypeID || this.initialClientType || '';
      const currentDate = new Date().toISOString();

    this.mngForm = this.fb.group({
      ClientID: [
        this.pageFunction === "Add" && this.prefillClientId ? this.prefillClientId : formData?.ClientID || "",
        Validators.required
      ],
      ClientTypeID: [clientType, Validators.required],
      TitleID: [formData?.TitleID || "", Validators.required],
      IdentificationTypeID: [formData?.IdentificationTypeID || "", Validators.required],
      PassportNo: [formData?.PassportNo || ""] ,
      IDExpiryDate: [formData?.IDExpiryDate || ""] ,
      ResidentID: [formData?.ResidentID || "", Validators.required],
      RelationshipManager: [formData?.RelationshipManager || "", Validators.required],
      
      FirstName: [
        formData?.FirstName || "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(40)]
      ],
      MiddleName: [
        formData?.MiddleName || "",
        [Validators.minLength(3), Validators.maxLength(40)]
      ],
      LastName: [
        formData?.LastName || "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(40)]
      ],
      DateOfBirth: [formData?.DateOfBirth || "", Validators.required],
      IsDOBGiven: [!!formData?.DateOfBirth || false],
      NationalId: [
        formData?.NationalId || "",
        [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern("[0-9]+")]
      ],
      GenderID: [formData?.GenderID || "M", Validators.required],
      KRAPin: [
        formData?.KRAPin || "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
      ],
      Disabled: [formData?.Disabled || false],
      DisabledRegNo: [formData?.DisabledRegNo || ""],
     NumberOfHouseMembers: [formData?.NumberOfHouseMembers || 1, Validators.required],
    CanDonateBlood: [formData?.CanDonateBlood || false, Validators.required],
    IsSalaried: [formData?.IsSalaried || false, Validators.required],
      PersonalPhone: [formData?.PersonalPhone || ""] ,
      AlternativePhone: (
        [formData?.AlternativePhone || "",
        [Validators.minLength(10), Validators.maxLength(12), Validators.pattern("[0-9]+")]]
      ),

      AlternativeEmail: [
        formData?.AlternativeEmail || "",
        [Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]
      ],
          WFClientStatusID: [formData?.WFClientStatusID || "A", Validators.required],
    OpenedBy: [formData?.OpenedBy || this.currentUser, Validators.required],
    CreatedBy: [formData?.CreatedBy || this.currentUser, Validators.required],
    CreatedOn: [formData?.CreatedOn || currentDate, Validators.required],
    OpenedDate: [formData?.OpenedDate || currentDate, Validators.required],
    UpdateCount: [formData?.UpdateCount || 0],
      
    CanSendGreetings: [formData?.CanSendGreetings || false],
    CanSendAssociateSpecialOffer: [formData?.CanSendAssociateSpecialOffer || false],
    CanSendOurSpecialOffers: [formData?.CanSendOurSpecialOffers || false],
    eStatementRequired: [formData?.eStatementRequired || false],
    MobileAlertRequired: [formData?.MobileAlertRequired || false],
    
    ParentClientID1: [formData?.ParentClientID1 ||  ""],
    ParentClientID2: [formData?.ParentClientID2 || ""],
      
      Addresses: this.fb.array([]),
      NextOfKin: this.fb.array(formData?.NextOfKin?.map(kin => this.createNextOfKin(kin)) || []),
      EmploymentDetails: this.fb.array(formData?.EmploymentDetails?.map(emp => this.createEmploymentDetail(emp)) || []),
    });

  if (formData?.Addresses && formData.Addresses.length > 0) {
    formData.Addresses.forEach(address => this.addAddress(address));
  } else {
    this.addAddress();
  }

  if (formData?.NextOfKin && formData.NextOfKin.length > 0) {
    formData.NextOfKin.forEach(kin => this.addNextOfKin(kin));
  }

  if (formData?.EmploymentDetails && formData.EmploymentDetails.length > 0) {
   // formData.EmploymentDetails.forEach(employment => this.addEmploymentDetail(employment));
  }

    if (this.pageFunction === "Add") {
      this.setupFormPersistence();
    }
      if (!clientType) {
    this.toggleFormFields('');
  } else {
    this.toggleFormFields(clientType);
  }
  }
createEmploymentDetail(emp?: EmploymentDetail): FormGroup {
  return this.fb.group({
    companyName: [emp?.companyName || "", Validators.required],
    workPosition: [emp?.workPosition || "", Validators.required],
    startDate: [emp?.startDate || "", Validators.required],
    endDate: [emp?.endDate || "", Validators.required],
  });
}
  generateCorporateForm(formData?: ClientFormData): void {
    const currentDate = new Date().toISOString();

    this.corporateForm = this.fb.group({
      CompanyName: [formData?.CompanyName || "", Validators.required],
      Constitution: [formData?.Constitution || "", Validators.required],
      NatureOfBusiness: [formData?.NatureOfBusiness || "", Validators.required],
      RegistrationNumber: [formData?.RegistrationNumber || "", Validators.required],
      RegisteredAt: [formData?.RegisteredAt || "", Validators.required],
      KRAPinNo: [formData?.KRAPin || "", Validators.required],
      DateOfRegistration: [formData?.DateOfRegistration || "", Validators.required],
      RegisteredOffice: [formData?.RegisteredOffice || "", Validators.required],
      Comments: [formData?.Comments || ""] ,
      Website: [formData?.Website || ""] ,
      OpenedBy: [formData?.OpenedBy || this.currentUser],
      OpenedOn: [formData?.OpenedOn || currentDate, Validators.required],
      RelationshipManager: [formData?.RelationshipManager || "", Validators.required]
    });
  }

  get addresses(): FormArray {
    return this.mngForm.get('Addresses') as FormArray;
  }
    validateDirectorsShareTotal(): boolean {
    if (this.isCorporateClient()) {
      const totalShare = this.dataSourceDirectors.data.reduce((sum, director) => sum + (director.share || 0), 0);
      return totalShare <= 100;
    }
    return true;
  }

  startAddDirector(): void {
    this.directorActionLabel = 'Add';
    this.selectedDirectorIndex = -1;
    this.generateDirectorForm();
    this.showDirectorsForm = true;
  }

  editDirector(director: Director, index: number): void {
    this.directorActionLabel = 'Update';
    this.selectedDirectorIndex = index;
    this.generateDirectorForm(director);
    this.showDirectorsForm = true;
  }

  addDirector(): void {
    if (this.directorsForm.invalid) {
      this.directorsForm.markAllAsTouched();
      return;
    }

    const directorData: Director = this.directorsForm.value;

    if (this.directorActionLabel === 'Add') {
      this.dataSourceDirectors.data.push(directorData);
    } else if (this.directorActionLabel === 'Update' && this.selectedDirectorIndex !== -1) {
      this.dataSourceDirectors.data[this.selectedDirectorIndex] = directorData;
    }

    this.refreshDirectors();
    this.cancelDirectorEdit();
  }

  deleteDirector(index: number): void {
    if (confirm('Are you sure you want to delete this director?')) {
      this.dataSourceDirectors.data.splice(index, 1);
      this.refreshDirectors();
    }
  }

  cancelDirectorEdit(): void {
    this.showDirectorsForm = false;
    this.selectedDirectorIndex = -1;
    this.directorsForm.reset();
  }

createAddress(address?: Address): FormGroup {
  const currentDate = new Date().toISOString();
  
  return this.fb.group({
    AddressTypeID: [address?.AddressTypeID || 'M', Validators.required],
    Address1: [address?.Address1 || '', Validators.required],
    Address2: [address?.Address2 || ''],
    CityID: [address?.CityID || '', Validators.required],
    CountryID: [address?.CountryID || 'KE', Validators.required],
    Mobile: [address?.Mobile || ''],
    Email: [address?.Email || '', Validators.email],
    IsMailingAddress: [address?.IsMailingAddress || false],
    CreatedBy: [address?.CreatedBy || this.currentUser, Validators.required],
    CreatedOn: [address?.CreatedOn || currentDate, Validators.required],
    UpdateCount: [address?.UpdateCount || 0]
  });
}

  addAddress(address?: Address): void {
    this.addresses.push(this.createAddress(address));
  }

  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }
createNextOfKin(kin?: NextOfKin): FormGroup {
  const currentDate = new Date().toISOString();
  
  return this.fb.group({
    ID: [kin?.ID || null],
    ClientID: [kin?.ClientID || ''],
    RelatedClientID: [kin?.RelatedClientID || '', Validators.required],
    RelationID: [kin?.RelationID || '', Validators.required],
    RelationRefNo: [kin?.RelationRefNo || 1, Validators.required],
    Remarks: [kin?.Remarks || '', Validators.required],
    SharePercent: [kin?.SharePercent || 0, [Validators.required, Validators.min(0), Validators.max(100)]],
    UpdateCount: [kin?.UpdateCount || 0],
    CreatedBy: [kin?.CreatedBy || this.currentUser, Validators.required],
    CreatedOn: [kin?.CreatedOn || currentDate, Validators.required]
  });
}

addNextOfKin(kin?: NextOfKin): void {
  const nextOfKinArray = this.mngForm.get('NextOfKin') as FormArray;
  nextOfKinArray.push(this.createNextOfKin(kin));
}


addParTran1(): void {
  this.showParTranForm1 = true;
  this.parTranAction1 = 'Add';
  this.selectedParTranIndex1 = null;
  this.generateSubForm1(); 
}

editParTran1(row: NextOfKin, index: number): void {
  this.showParTranForm1 = true;
  this.parTranAction1 = 'Update';
  this.selectedParTranIndex1 = index;
  this.generateSubForm1(row, true); 
}

cancelParTran1(): void {
  this.showParTranForm1 = false;
  this.selectedParTranIndex1 = null;
  this.nextOfKinForm.reset();
}

addParTran4(): void {
  this.showParTranForm4 = true;
  this.parTranAction4 = 'Add';
  this.selectedParTranIndex4 = null;
  this.generateSubForm4(); 
}

editParTran4(row: EmploymentDetail, index: number): void {
  this.showParTranForm4 = true;
  this.parTranAction4 = 'Update';
  this.selectedParTranIndex4 = index;
  this.generateSubForm4(row); 
}

cancelParTran4(): void {
  this.showParTranForm4 = false;
  this.selectedParTranIndex4 = null;
  this.workExpForm.reset();
}

pushToDataSource1(): void {
  if (this.nextOfKinForm.invalid) {
    this.nextOfKinForm.markAllAsTouched();
    return;
  }
  const nextOfKinData: NextOfKin = {
    ...this.nextOfKinForm.value,
    CreatedBy: this.currentUser,
    CreatedOn: new Date().toISOString(),
    UpdateCount: 0
  };

  if (this.parTranAction1 === 'Add') {
    this.dataSource1.data = [...this.dataSource1.data, nextOfKinData];
    (this.mngForm.get('NextOfKin') as FormArray).push(this.createNextOfKin(nextOfKinData));
  } else if (this.parTranAction1 === 'Update' && this.selectedParTranIndex1 !== null) {
    this.dataSource1.data[this.selectedParTranIndex1] = nextOfKinData;
    (this.mngForm.get('NextOfKin') as FormArray).at(this.selectedParTranIndex1).setValue(nextOfKinData);
  }

  this.refresh1();
  this.cancelParTran1();
}

pushToDataSource4(): void {
  if (this.workExpForm.invalid) {
    this.workExpForm.markAllAsTouched();
    return;
  }

  const employmentData: EmploymentDetail = this.workExpForm.value;

  if (this.parTranAction4 === 'Add') {
    this.dataSource4.data.push(employmentData);
  } else if (this.parTranAction4 === 'Update' && this.selectedParTranIndex4 !== null) {
    this.dataSource4.data[this.selectedParTranIndex4] = employmentData;
  }

  this.refresh4();
  this.cancelParTran4();
}
deleteParTran1(index: number): void {
  if (confirm('Are you sure you want to delete this next of kin?')) {
    this.dataSource1.data.splice(index, 1);
    this.refresh1();
  }
}

deleteParTran4(index: number): void {
  if (confirm('Are you sure you want to delete this employment detail?')) {
    this.dataSource4.data.splice(index, 1);
    this.refresh4();
  }
}
applyFilter1(event: Event): void {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource1.filter = filterValue.trim().toLowerCase();
  
  if (this.dataSource1.paginator) {
    this.dataSource1.paginator.firstPage();
  }
}

applyFilter4(event: Event): void {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource4.filter = filterValue.trim().toLowerCase();
  
  if (this.dataSource4.paginator) {
    this.dataSource4.paginator.firstPage();
  }
}

generateSubForm1(formData?: NextOfKin, isEdit = false): void {
  this.nextOfKinForm = this.fb.group({
    ClientID: [formData?.ClientID || this.mngForm.get('ClientID')?.value || "", Validators.required],
    RelatedClientID: [formData?.RelatedClientID || "", Validators.required],
    RelationID: [formData?.RelationID || "", Validators.required],
    RelationRefNo: [formData?.RelationRefNo || 1, Validators.required],
    Remarks: [formData?.Remarks || "", Validators.required],
    SharePercent: [
      formData?.SharePercent || 0,
      [Validators.required, Validators.min(0), Validators.max(100)]
    ],
    remainingAllocation: [{ value: 100 - (formData?.SharePercent || 0), disabled: true }],
    UpdateCount: [formData?.UpdateCount || 0],
    CreatedBy: [formData?.CreatedBy || this.currentUser, Validators.required],
    CreatedOn: [formData?.CreatedOn || new Date().toISOString(), Validators.required]
  });

  this.nextOfKinForm.get("SharePercent")?.valueChanges.subscribe(() => {
    this.calculateRemainingAllocation(isEdit);
  });

  this.calculateRemainingAllocation(isEdit);
}


  calculateRemainingAllocation(isEdit: boolean = false): void {
    const currentAllocation = this.nextOfKinForm.get('SharePercent')?.value || 0;
    
    let totalAllocated = this.dataSource1.data.reduce((sum, kin, index) => {
      if (isEdit && index === this.selectedParTranIndex1) {
        return sum;
      }
      return sum + (kin.SharePercent || 0);
    }, 0);

    const remaining = 100 - totalAllocated - currentAllocation;
    
    this.nextOfKinForm.get('remainingAllocation')?.setValue(remaining >= 0 ? remaining : 0);
  }

  generateSubForm4(formData?: EmploymentDetail): void {
    this.workExpForm = this.fb.group({
      companyName: [formData?.companyName || "", Validators.required],
      workPosition: [formData?.workPosition || "", Validators.required],
      startDate: [formData?.startDate || "", Validators.required],
      endDate: [formData?.endDate || "", Validators.required],
    });
  }

  generateDirectorForm(director?: Director): void {
    this.directorsForm = this.fb.group({
      clientName: [director?.clientName || '', [Validators.required, Validators.minLength(2)]],
      relation: [director?.relation || '', [Validators.required]],
      share: [
        director?.share || 0,
        [Validators.required, Validators.min(0), Validators.max(100)]
      ]
    });
  }



onClientTypeChange(): void {
  const clientType = this.mngForm.get('ClientTypeID')?.value;
  
  this.toggleFormFields(clientType);
  
  if (clientType === 'Corporate' || clientType === 'Bank') {
    this.mngForm.get('TitleID')?.reset();
    this.mngForm.get('FirstName')?.reset();
    this.mngForm.get('LastName')?.reset();
    this.mngForm.get('GenderID')?.reset();
  }
}

isClientTypeSelected(): boolean {
  return !!this.mngForm.get('ClientTypeID')?.value;
}

isCorporateClient(): boolean {
  const clientType = this.mngForm.get('ClientTypeID')?.value;
  return clientType === 'Corporate' || clientType === 'Bank';
}

isIndividualClient(): boolean {
  const clientType = this.mngForm.get('ClientTypeID')?.value;
  return clientType === 'Individual' || clientType === 'Employee' || clientType === 'Minor';
}

toggleFormFields(clientType: string): void {
  const fieldsToToggle = [
    'ApplicationID', 'BaseID', 'ResidentID', 'RelationshipManager', 
    'IdentificationTypeID', 'PassportNo', 'IDExpiryDate'
  ];

  fieldsToToggle.forEach(field => {
    const control = this.mngForm.get(field);
    if (control) {
      if (clientType) {
        control.enable();
      } else {
        control.disable();
        control.reset();
      }
    }
  });

  const titleControl = this.mngForm.get('TitleID');
  if (titleControl) {
    if (clientType && !this.isCorporateClient()) {
      titleControl.enable();
    } else {
      titleControl.disable();
      titleControl.reset();
    }
  }
}

//*************************file handling section******************************** */

  createDocumentsForm() {
    this.documentsForm = this.fb.group({
      documentDetails: this.fb.array([]),
    });
    this.addDocumentRow();
  }

  addDocumentRow() {
    this.isDocumentDataLoading = false;
    const currentDate = new Date().toISOString();
    
    const row = this.fb.group({
      DocumentID: ["", Validators.required],
      DocumentTypeID: ["", Validators.required],
      MimeType: ["", Validators.required],
      Description: [""],
      ImageID: [0],
      sImage: ["", Validators.required],
      Remarks: [""],
      CreatedOn: [currentDate],
      CreatedBy: [this.currentUser],
      ModifiedBy: [""],
      ModifiedOn: [""],
      UpdateCount: [0]
    });
    
    this.documentRows.push(row);
    this.documentsDataSource.next(this.documentRows.controls);
  }

  updateDocumentsView() {
    this.documentsDataSource.next(this.documentRows.controls);
  }

  deleteDocument(row: AbstractControl) {
    const dataArray = this.documentsDataSource.getValue();
    const index = dataArray.indexOf(row);

    if (index !== -1) {
      dataArray.splice(index, 1);
      this.documentsDataSource.next(dataArray);
    }
  }

  onSelectDocumentFile(files, selectedRow, index) {
    this.isFileLoading.next(true);
    
    this.filesService.toBase64(files, []).subscribe((res) => {
      if (res && res.length > 0) {
        this.isFileLoading.next(false);
        
        const selectedFile = res[0];
        const fileName = selectedFile.name;
        const fileParts = fileName.split(".");
        const extension = fileParts[fileParts.length - 1];
        
        let mimeType = "application/octet-stream";
        switch (extension.toLowerCase()) {
          case "pdf": mimeType = "application/pdf"; break;
          case "jpg": case "jpeg": mimeType = "image/jpeg"; break;
          case "png": mimeType = "image/png"; break;
          case "gif": mimeType = "image/gif"; break;
          case "doc": mimeType = "application/msword"; break;
          case "docx": mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"; break;
        }
        
        this.documentRows.at(index).patchValue({
          sImage: selectedFile.base64,
          MimeType: mimeType,
          Description: fileName
        });
        
        this.updateDocumentsView();
      }
    });
  }

  downloadDocument(row: any) {
    let file = row.value.sImage;
    let mimeType = row.value.MimeType;
    let description = row.value.Description || "document";
    
    const link = document.createElement("a");
    link.href = `data:${mimeType};base64,${file}`;
    link.download = description;
    link.click();
  }


  private populateDocuments(documents: any[]): void {
    while (this.documentRows.length > 0) {
      this.documentRows.removeAt(0);
    }
    
    if (documents && documents.length > 0) {
      documents.forEach(document => {
        this.addDocument(document);
      });
    } else {
      this.addDocumentRow();
    }
  }

  addDocument(document?: any): void {
    const currentDate = new Date().toISOString();
    
    const row = this.fb.group({
      DocumentID: [document?.DocumentID || "", Validators.required],
      DocumentTypeID: [document?.DocumentTypeID || "", Validators.required],
      MimeType: [document?.MimeType || "", Validators.required],
      Description: [document?.Description || ""],
      ImageID: [document?.ImageID || 0],
      sImage: [document?.sImage || "", Validators.required],
      Remarks: [document?.Remarks || ""],
      CreatedOn: [document?.CreatedOn || currentDate],
      CreatedBy: [document?.CreatedBy || this.currentUser],
      ModifiedBy: [document?.ModifiedBy || ""],
      ModifiedOn: [document?.ModifiedOn || ""],
      UpdateCount: [document?.UpdateCount || 0]
    });
    
    this.documentRows.push(row);
    this.documentsDataSource.next(this.documentRows.controls);
  }


//end of file handling section******************************** */

onSubmit(): void {
  this.posting = true;

  const requiredFields = [
    'WFClientStatusID', 'OpenedBy', 'CreatedBy', 'CreatedOn', 'OpenedDate',
    'NumberOfHouseMembers', 'CanDonateBlood', 'IsSalaried'
  ];
  
  const missingFields = requiredFields.filter(field => {
    const value = this.mngForm.get(field)?.value;
    return value === null || value === undefined || value === '';
  });

  if (missingFields.length > 0) {
    this.snackbar.showNotification("snackbar-danger", 
      `Missing required fields: ${missingFields.join(', ')}`);
    this.posting = false;
    return;
  }

   const totalAllocation = this.dataSource1.data.reduce((sum, kin) => sum + (kin.SharePercent || 0), 0);
  if (totalAllocation !== 100) {
    this.snackbar.showNotification("snackbar-danger", 
      "Next Of Kin Total percentage allocation must be exactly 100%.");
    this.posting = false;
    return;
  }

  if (this.mngForm.valid && (this.isCorporateClient() ? this.corporateForm.valid : true)) {
    const formValue = this.prepareFormData();
    this.submitFormData(formValue);
  } else {
    this.displayInvalidFields();
    this.posting = false;
  }
}
  private prepareFormData(): any {
    const formValue = {
      ...this.mngForm.value,
      Name: `${this.mngForm.value.FirstName} ${this.mngForm.value.MiddleName || ''} ${this.mngForm.value.LastName}`.trim(),
      IsDOBGiven: !!this.mngForm.value.DateOfBirth,
      NextOfKin: this.dataSource1.data,
      EmploymentDetails: this.dataSource4.data,
          WFClientStatusID: this.mngForm.value.WFClientStatusID || 'A',
    OpenedBy: this.mngForm.value.OpenedBy || this.currentUser,
    CreatedBy: this.mngForm.value.CreatedBy || this.currentUser,
    CreatedOn: this.mngForm.value.CreatedOn || new Date().toISOString(),
    OpenedDate: this.mngForm.value.OpenedDate || new Date().toISOString(),
    UpdateCount: this.mngForm.value.UpdateCount || 0,
    NumberOfHouseMembers: this.mngForm.value.NumberOfHouseMembers || 1,
    CanDonateBlood: this.mngForm.value.CanDonateBlood || false,
    IsSalaried: this.mngForm.value.IsSalaried || false,
    Documents: this.documentsForm.value.documentDetails.map(doc => ({
        ...doc,
        CreatedOn: doc.CreatedOn || new Date().toISOString(),
        CreatedBy: doc.CreatedBy || this.currentUser
      }))
      
    };

      if (formValue.CreatedOn && typeof formValue.CreatedOn === 'string') {
    formValue.CreatedOn = this.formatDateForBackend(formValue.CreatedOn);
  }
  
  if (formValue.OpenedDate && typeof formValue.OpenedDate === 'string') {
    formValue.OpenedDate = this.formatDateForBackend(formValue.OpenedDate);
  }
  
  if (formValue.DateOfBirth && typeof formValue.DateOfBirth === 'string') {
    formValue.DateOfBirth = this.formatDateForBackend(formValue.DateOfBirth);
  }

    if (formValue.OpenedOn && typeof formValue.OpenedOn === 'string') {
  formValue.OpenedOn = this.formatDateForBackend(formValue.OpenedOn);
}

    if (this.isCorporateClient()) {
      Object.assign(formValue, this.corporateForm.value);
      formValue.Directors = this.dataSourceDirectors.data;
    }

    return formValue;
  }
private formatDateForBackend(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return new Date().toISOString();
    }
    return date.toISOString();
  } catch (error) {
    return new Date().toISOString();
  }
}
private submitFormData(formValue: any): void {
  console.log('Complete form value being submitted:', formValue, null, 2);
  
  console.log('CreatedOn:', formValue.CreatedOn);
  console.log('OpenedDate:', formValue.OpenedDate);
  
  const requestId = this.pageFunction === "Update" 
    ? this.requestId || this.formData?.ClientID || this.generateRandomId()
    : this.generateRandomId();

  const clientId = this.pageFunction === "Update"
    ? this.requestCode || this.formData?.ClientID || formValue.ClientID
    : formValue.ClientID || this.generateClientId();

  const formattedRequest = {
    RequestID: requestId,
    RequestData: {
      ...formValue,
      ClientID: clientId,
      UpdateCount: this.pageFunction === "Update" ? (this.formData?.UpdateCount || 0) + 1 : 0
    },
    RequestTime: new Date().toISOString(),
    AppName: "CLIENT_DATA"
  };

  console.log('Final request to backend:', formattedRequest, null, 2);
  
  const serviceCall = this.pageFunction === "Add"
    ? this.employeeService.create(formattedRequest)
    : this.employeeService.update(formattedRequest);

  serviceCall.subscribe({
    next: (res) => this.handleSubmitResponse(res),
    error: (err) => this.handleSubmitError(err),
    complete: () => this.posting = false
  });
}

  private handleSubmitResponse(res: any): void {
    const messageType = res.ResponseCode === "00" ? "snackbar-success" : "snackbar-danger";
  this.snackbar.showNotification(messageType, res.ResponseMessage);

  if (messageType === "snackbar-success") {
    this.cancel();
  }
}

  private handleSubmitError(err: any): void {
    this.snackbar.showNotification("snackbar-danger", err.ResponseMessage);
    this.posting = false;
  }


  private setupFormPersistence(): void {
    const storedData = localStorage.getItem("mngFormDataEmployee");
    if (storedData) {
      this.mngForm.patchValue(JSON.parse(storedData));
      this.onPopulateTables(JSON.parse(storedData));
    }

    this.mngForm.valueChanges.subscribe((value) => {
      localStorage.setItem("mngFormDataEmployee", JSON.stringify(value));
    });
  }

  private displayInvalidFields(): void {
    const invalidFields = [];
    const checkFormInvalid = (form: FormGroup, prefix: string = '') => {
      Object.keys(form.controls).forEach(key => {
        const control = form.get(key);
        if (control?.invalid) {
          invalidFields.push(prefix + key);
        }
      });
    };

    checkFormInvalid(this.mngForm);
    if (this.isCorporateClient()) {
      checkFormInvalid(this.corporateForm, 'Corporate ');
    }

    const message = `Please fill in the following fields: ${invalidFields.join(", ")}`;
    this.snackbar.showNotification("snackbar-danger", message);
  }

  generateClientId(): string {
    return 'CL' + Date.now() + Math.random().toString(36).substr(2, 6).toUpperCase();
  }

  generateRandomId(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }

  cancel(): void {
    this.router.navigate(["/erp-hr/employees/all-employees"]);
  }

  refresh1(): void {
    this.dataSource1.data = [...this.dataSource1.data];
    this.dataSource1.paginator = this.paginator1;
    this.dataSource1.sort = this.sort1;
  }

  refresh4(): void {
    this.dataSource4.data = [...this.dataSource4.data];
    this.dataSource4.paginator = this.paginator4;
    this.dataSource4.sort = this.sort4;
  }

  applyDirectorsFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.directorsInputFilter = filterValue;
    this.dataSourceDirectors.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSourceDirectors.paginator) {
      this.dataSourceDirectors.paginator.firstPage();
    }
  }

  refreshDirectors(): void {
    this.dataSourceDirectors.data = [...this.dataSourceDirectors.data];
    this.dataSourceDirectors.paginator = this.paginatorDirectors;
    this.dataSourceDirectors.sort = this.sortDirectors;
  }
}