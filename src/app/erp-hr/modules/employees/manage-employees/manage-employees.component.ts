import { DatePipe } from "@angular/common";
import { HttpParams } from "@angular/common/http";
import { Component, OnInit, OnDestroy, ViewChild, Input, Output, EventEmitter } from "@angular/core";
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
import { DocumentPreviewDialogComponent } from "../document-preview-dialog/document-preview-dialog.component";
import { ClientLookupDialogComponent } from "../client-lookup-dialog/client-lookup-dialog.component";
import Swal from "sweetalert2";

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
  Documents?: ClientDocument[];
  ParentClientID1?: string;
  ParentClientID2?: string;
  RelationshipManager?: string;
  Website?: string;
  Constitution?: string; 
}
interface ClientDocument {
  DocumentID: string;
  DocumentTypeID: string;
  MimeType: string;
  Description: string;
  ImageID: number;
  sImage: string; 
  Remarks: string;
  CreatedOn: string;
  CreatedBy: string;
  ModifiedBy: string;
  ModifiedOn: string;
  UpdateCount: number;
  isExistingFile?: boolean;
  fileName?: string; 
}

@Component({
  selector: "app-manage-employees",
  templateUrl: "./manage-employees.component.html",
  styleUrls: ["./manage-employees.component.sass"],
})
export class ManageEmployeesComponent implements OnInit, OnDestroy {
  // Dialog mode inputs
  @Input() dialogMode: boolean = false;
  @Input() actionMode: string = '';
  @Input() clientIdParam: string = '';
  @Input() clientTypeIdParam: string = '';
  @Input() prefillClientIdParam: boolean = false;
  @Output() closeDialogEvent = new EventEmitter<void>();

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
  
  clientTypeOptions = [
    { value: 'B', label: 'Bank' },
    { value: 'C', label: 'Corporate Client' },
    { value: 'E', label: 'Employee' },
    { value: 'I', label: 'Individual Client' },
    { value: 'M', label: 'Minor' },
    { value: 'N', label: 'Non Resident' },
    { value: 'NC', label: 'Individual Non-Client' }
  ];
  
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
  relationSelections = [
    { value: 'S', label: 'Spouse' },
    { value: 'P', label: 'Parent / Guardian' },
    { value: 'C', label: 'Child' },
    { value: 'O', label: 'Other' }
  ];
  relationOptions = this.relationSelections.map(option => option.value);
  relationDisplayMap: Record<string, string> = this.relationSelections.reduce((acc, option) => {
    acc[option.value] = option.label;
    return acc;
  }, {} as Record<string, string>);
  
  relationshipManagers = [
    { id: '020606', name: 'ANUP JANTILAL SOLANKI' },
    { id: '020607', name: 'JOHN DOE' },
    { id: '020608', name: 'JANE SMITH' },
  ];

    documentTypes = [
    { SubCodeID: "D", CodeDescription: "Document", DisplayOrder: 5 },
    //{ SubCodeID: "F", CodeDescription: "Fingerprint", DisplayOrder: 6 },
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

  private readonly individualFieldValidators: { [field: string]: any[] } = {
    IdentificationTypeID: [Validators.required],
    ResidentID: [Validators.required],
    RelationshipManager: [Validators.required],
    FirstName: [Validators.required, Validators.minLength(3), Validators.maxLength(40)],
    LastName: [Validators.required, Validators.minLength(3), Validators.maxLength(40)],
    DateOfBirth: [Validators.required],
    NationalId: [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(10),
      Validators.pattern("[0-9]+")
    ],
    GenderID: [Validators.required],
    KRAPin: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  };
  documentsDisplayColumns = [
    "id",
    "documentType",
    "documentTypeId",
    "description",
   // "mimeType",
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
  // Check if in dialog mode
  if (this.dialogMode) {
    console.log("Dialog mode enabled");
    this.pageFunction = this.actionMode || 'Add';
    this.requestCode = this.clientIdParam || '';
  this.initialClientType = this.normalizeClientType(this.clientTypeIdParam || '');
    
    if (this.prefillClientIdParam && this.clientIdParam) {
      this.prefillClientId = this.clientIdParam;
      console.log("Prefill Client ID set to:", this.prefillClientId);
    }

    if (this.requestCode && this.requestCode.trim() !== '') {
      console.log("Page function set to:", this.pageFunction, "with Client ID:", this.requestCode);

      if (this.pageFunction === "Add" && this.prefillClientIdParam) {
        console.log("Add mode with prefill - going straight to form");
        this.getPage();
      } else if (this.pageFunction === "View" || this.pageFunction === "Update" || this.pageFunction === "Supervise") {
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
  } else {
    // Router mode
    this.route.queryParams.subscribe((params) => {
      console.log("params: ", params);
      if (params.ClientTypeID) {
        this.initialClientType = this.normalizeClientType(params.ClientTypeID);
      }

      if (params.prefillClientId && params.requestCode) {
        this.prefillClientId = params.requestCode;
        console.log("Prefill Client ID set to:", this.prefillClientId);
      }

      if (params.requestCode && params.requestCode.trim() !== '') {
        this.requestCode = params.requestCode;
        //this.requestId = params.requestId;
        this.pageFunction = params.action;
        console.log("Page function set to:", this.pageFunction, "with Client ID:", this.requestCode);

        if (this.pageFunction === "Add" && params.prefillClientId) {
          console.log("Add mode with prefill - skipping data fetch, going straight to form");
          this.getPage();
        } else if (this.pageFunction === "View" || this.pageFunction === "Update" || this.pageFunction === "Supervise") {
          // Fetch data for View, Update, and Supervise modes
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
      //this.requestId = params.requestId;
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
            const normalizedDetails = this.normalizeClientFormData(res.Details);
            this.formData = normalizedDetails;
            console.log("getDataById normalized formData: ", this.formData);
            if (this.pageFunction === "View") {
              this.activateViewMode();
            }

          this.getPage();
          
          setTimeout(() => {
            this.onPopulateTables({ Details: normalizedDetails });
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

  private normalizeClientFormData(data: ClientFormData): ClientFormData {
    if (!data) {
      return data;
    }

    const normalizedClientType = this.normalizeClientType(data.ClientTypeID);
    const normalized: ClientFormData = {
      ...data,
      ClientTypeID: normalizedClientType,
      TitleID: this.normalizeStringOption(data.TitleID, this.titleOptions) || '',
      IdentificationTypeID: this.normalizeStringOption(data.IdentificationTypeID, this.identificationTypeOptions) || '',
      ResidentID: this.normalizeStringOption(data.ResidentID, this.residentStatusOptions) || '',
      RelationshipManager: this.normalizeRelationshipManager(data.RelationshipManager) || '',
  Disabled: this.normalizeBoolean(data.Disabled),
  IsDOBGiven: this.normalizeBoolean(data.IsDOBGiven, !!data.DateOfBirth),
  CanDonateBlood: this.normalizeBoolean(data.CanDonateBlood),
  CanSendGreetings: this.normalizeBoolean(data.CanSendGreetings),
  CanSendAssociateSpecialOffer: this.normalizeBoolean(data.CanSendAssociateSpecialOffer),
  CanSendOurSpecialOffers: this.normalizeBoolean(data.CanSendOurSpecialOffers),
  eStatementRequired: this.normalizeBoolean(data.eStatementRequired),
  MobileAlertRequired: this.normalizeBoolean(data.MobileAlertRequired),
  IsSalaried: this.normalizeBoolean(data.IsSalaried),
      Addresses: data.Addresses ? data.Addresses.map(address => this.normalizeAddress(address)) : [],
      NextOfKin: data.NextOfKin ? data.NextOfKin.map(kin => this.normalizeNextOfKin(kin)) : [],
      EmploymentDetails: data.EmploymentDetails ? data.EmploymentDetails.map(detail => ({ ...detail })) : [],
      Directors: data.Directors ? data.Directors.map(director => ({ ...director })) : [],
      Documents: this.normalizeDocuments((data as any).Documents || data.Documents || [])
    };

    return normalized;
  }

  private normalizeClientType(value: string | null | undefined): string {
    if (!value) {
      return '';
    }
    const trimmed = value.toString().trim();
    const match = this.clientTypeOptions.find(option =>
      option.value.toLowerCase() === trimmed.toLowerCase() ||
      option.label.toLowerCase() === trimmed.toLowerCase()
    );
    return match ? match.value : trimmed;
  }

  private normalizeStringOption(value: string | null | undefined, options: string[]): string | null | undefined {
    if (value === null || value === undefined) {
      return value;
    }
    const trimmed = value.toString().trim();
    const match = options.find(option => option.toLowerCase() === trimmed.toLowerCase());
    return match || trimmed;
  }

  private normalizeRelationshipManager(value: string | null | undefined): string | null | undefined {
    if (value === null || value === undefined) {
      return value;
    }
    const trimmed = value.toString().trim();
    const match = this.relationshipManagers.find(manager =>
      manager.id.toLowerCase() === trimmed.toLowerCase() ||
      manager.name.toLowerCase() === trimmed.toLowerCase()
    );
    return match ? match.id : trimmed;
  }

  private normalizeAddress(address: Address): Address {
    if (!address) {
      return address;
    }
    return {
      ...address,
      AddressTypeID: this.normalizeAddressType(address.AddressTypeID),
      CountryID: this.normalizeCountryCode(address.CountryID),
      CityID: this.normalizeCountryCode(address.CityID),
      IsMailingAddress: this.normalizeBoolean(address.IsMailingAddress),
      UpdateCount: this.normalizeNumber(address.UpdateCount)
    };
  }

  private normalizeAddressType(value: string | null | undefined): string {
    if (!value) {
      return 'M';
    }
    const trimmed = value.toString().trim();
    const upper = trimmed.toUpperCase();
    if (['M', 'P', 'R'].includes(upper)) {
      return upper;
    }
    const map: Record<string, string> = {
      mailing: 'M',
      mail: 'M',
      postal: 'M',
      physical: 'P',
      work: 'P',
      business: 'P',
      office: 'P',
      residential: 'R',
      residence: 'R',
      home: 'R'
    };
    const key = trimmed.toLowerCase();
    return map[key] || 'M';
  }

  private normalizeCountryCode(value: string | null | undefined): string {
    if (!value) {
      return 'KE';
    }
    const trimmed = value.toString().trim();
    const matchByCode = this.countries.find(country => country.code.toLowerCase() === trimmed.toLowerCase());
    if (matchByCode) {
      return matchByCode.code;
    }
    const matchByName = this.countries.find(country => country.name.toLowerCase() === trimmed.toLowerCase());
    return matchByName ? matchByName.code : trimmed;
  }

  private normalizeNextOfKin(kin: NextOfKin): NextOfKin {
    if (!kin) {
      return kin;
    }
    return {
      ...kin,
      RelationID: this.normalizeRelation(kin.RelationID),
      SharePercent: this.normalizeNumber(kin.SharePercent),
      RelationRefNo: this.normalizeNumber(kin.RelationRefNo, 1),
      UpdateCount: this.normalizeNumber(kin.UpdateCount)
    };
  }

  private normalizeRelation(value: string | null | undefined): string {
    if (!value) {
      return 'O';
    }
    const trimmed = value.toString().trim();
    if (this.relationOptions.includes(trimmed)) {
      return trimmed;
    }
    const relationMap: Record<string, string> = {
      son: 'S',
      daughter: 'S',
      child: 'C',
      spouse: 'P',
      partner: 'P',
      parent: 'P',
      mother: 'P',
      father: 'P',
      guardian: 'O',
      brother: 'O',
      sister: 'O',
      relative: 'O',
      other: 'O'
    };
    const key = trimmed.toLowerCase();
    return relationMap[key] || 'O';
  }

  private normalizeDocuments(documents: ClientDocument[]): ClientDocument[] {
    if (!documents || documents.length === 0) {
      return [];
    }
    return documents.map(document => ({
      ...document,
      DocumentID: this.normalizeDocumentType(document.DocumentID),
      DocumentTypeID: this.normalizeDocumentTypeId(document.DocumentTypeID),
      isExistingFile: this.normalizeBoolean(document.isExistingFile, true),
      UpdateCount: this.normalizeNumber(document.UpdateCount)
    }));
  }

  private normalizeDocumentType(value: string | null | undefined): string {
    if (!value) {
      return '';
    }
    const trimmed = value.toString().trim();
    const match = this.documentTypes.find(type =>
      type.SubCodeID.toLowerCase() === trimmed.toLowerCase() ||
      type.CodeDescription.toLowerCase() === trimmed.toLowerCase()
    );
    return match ? match.SubCodeID : trimmed;
  }

  private normalizeDocumentTypeId(value: string | null | undefined): string {
    if (!value) {
      return '';
    }
    const trimmed = value.toString().trim();
    const match = this.documentTypeIds.find(type =>
      type.SubCodeID.toLowerCase() === trimmed.toLowerCase() ||
      type.CodeDescription.toLowerCase() === trimmed.toLowerCase()
    );
    return match ? match.SubCodeID : trimmed;
  }

  private normalizeBoolean(value: any, defaultValue: boolean = false): boolean {
    if (value === null || value === undefined) {
      return defaultValue;
    }
    if (typeof value === 'boolean') {
      return value;
    }
    if (typeof value === 'number') {
      return value !== 0;
    }
    const normalized = value.toString().trim().toLowerCase();
    return ['true', '1', 'y', 'yes', 't'].includes(normalized);
  }

  private normalizeNumber(value: any, defaultValue: number = 0): number {
    if (value === null || value === undefined || value === '') {
      return defaultValue;
    }
    const parsed = Number(value);
    return isNaN(parsed) ? defaultValue : parsed;
  }

 onPopulateTables(res: any): void {
    const entity = res.Details || res.entity || res;
    
    if (entity.NextOfKin) {
      this.dataSource1.data = entity.NextOfKin.map((kin: NextOfKin) => this.normalizeNextOfKin(kin));
      this.refresh1();
    }
    
    if (entity.EmploymentDetails) {
      this.dataSource4.data = entity.EmploymentDetails.map((detail: EmploymentDetail) => ({ ...detail }));
      this.refresh4();
    }
    
    if (entity.Directors) {
      this.dataSourceDirectors.data = entity.Directors.map((director: Director) => ({ ...director }));
      this.refreshDirectors();
    }
    if (entity.Addresses) {
      this.populateAddresses(entity.Addresses.map((address: Address) => this.normalizeAddress(address)));
    }
    if (entity.Documents) {
      this.populateDocuments(this.normalizeDocuments(entity.Documents));
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
    } else if (this.pageFunction === "View") {
      this.generateForm(this.formData);
      this.generateCorporateForm(this.formData);
      this.generateSubForm1();
      this.activateViewMode();
    } else if (this.pageFunction === "Supervise") {
      // Supervise mode - populate form like View but enable Approve button
      this.generateForm(this.formData);
      this.generateCorporateForm(this.formData);
      this.generateSubForm1();
      this.activateViewMode(); // Make form read-only
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
     // this.setupFormPersistence();
    }
      if (!clientType) {
    this.toggleFormFields('');
  } else {
    this.toggleFormFields(clientType);
  }

    this.applyClientTypeValidators(this.mngForm.get('ClientTypeID')?.value || '');
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

  const clientId = this.mngForm.get('ClientID')?.value;
  if (clientId) {
    nextOfKinData.ClientID = clientId;
  }

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
    const nextOfKinArray = this.mngForm.get('NextOfKin') as FormArray;
    if (nextOfKinArray && nextOfKinArray.length > index) {
      nextOfKinArray.removeAt(index);
    }
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
    // Client ID can be blank in Add mode until the main form assigns it just before submit
    ClientID: [formData?.ClientID || this.mngForm.get('ClientID')?.value || ""],
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
    const roundedRemaining = Math.round(remaining * 100) / 100;
    this.nextOfKinForm.get('remainingAllocation')?.setValue(roundedRemaining);
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
  this.applyClientTypeValidators(clientType);
  
  if (clientType === 'C' || clientType === 'B') {
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
  return clientType === 'C' || clientType === 'B';
}

isIndividualClient(): boolean {
  const clientType = this.mngForm.get('ClientTypeID')?.value;
  return clientType === 'I' || clientType === 'E' || clientType === 'M';
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

private applyClientTypeValidators(clientType: string): void {
  if (!this.mngForm) {
    return;
  }

  const isCorporate = clientType === 'C' || clientType === 'B';

  Object.entries(this.individualFieldValidators).forEach(([field, validators]) => {
    const control = this.mngForm.get(field);
    if (!control) {
      return;
    }

    if (isCorporate) {
      control.clearValidators();
      control.disable({ emitEvent: false });
    } else {
      control.enable({ emitEvent: false });
      control.setValidators(validators);
    }

    control.updateValueAndValidity({ emitEvent: false });
  });
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
        case "txt": mimeType = "text/plain"; break;
      }
      
      this.documentRows.at(index).patchValue({
        sImage: selectedFile.base64,
        MimeType: mimeType,
        Description: fileName,
        fileName: fileName,
        isExistingFile: false 
      });
      
      this.updateDocumentsView();
    }
  });
}

private populateDocuments(documents: any[]): void {
  while (this.documentRows.length > 0) {
    this.documentRows.removeAt(0);
  }
  
  if (documents && documents.length > 0) {
    documents.forEach(document => {
      this.addExistingDocument(document);
    });
  } else {
    this.addDocumentRow();
  }
  this.updateDocumentsView();
}

private addExistingDocument(document: any): void {
  const currentDate = new Date().toISOString();
  
  const fileName = document.Description || `document_${new Date().getTime()}`;
  
  const row = this.fb.group({
    DocumentID: [document.DocumentID || "", Validators.required],
    DocumentTypeID: [document.DocumentTypeID || "", Validators.required],
    MimeType: [document.MimeType || "", Validators.required],
    Description: [document.Description || ""],
    ImageID: [document.ImageID || 0],
    sImage: [document.sImage || "", Validators.required],
    Remarks: [document.Remarks || ""],
    CreatedOn: [document.CreatedOn || currentDate],
    CreatedBy: [document.CreatedBy || this.currentUser],
    ModifiedBy: [document.ModifiedBy || ""],
    ModifiedOn: [document.ModifiedOn || ""],
    UpdateCount: [document.UpdateCount || 0],
    isExistingFile: [true], 
    fileName: [fileName] 
  });
  
  this.documentRows.push(row);
  this.documentsDataSource.next(this.documentRows.controls);
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

downloadDocument(row: any): void {
  const fileData = row.value.sImage;
  const mimeType = row.value.MimeType || this.detectMimeTypeFromBase64(fileData);
  const fileName = row.value.fileName || row.value.Description || 'document';
  
  if (!fileData) {
    this.snackbar.showNotification("snackbar-warning", "No file data available for download");
    return;
  }
  
  try {
    // Handle both data URI format and raw base64
    let base64Data = fileData;
    if (fileData.includes(',')) {
      base64Data = fileData.split(',')[1];
    }
    
    // Check if base64 data is valid
    if (!this.isValidBase64(base64Data)) {
      this.snackbar.showNotification("snackbar-warning", "File data is corrupted or incomplete");
      return;
    }
    
    // Convert base64 to blob
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });
    
    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    
    // Add appropriate file extension
    const fileExtension = this.getFileExtensionFromMimeType(mimeType);
    link.download = `${fileName}${fileExtension}`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    window.URL.revokeObjectURL(url);
    
    this.snackbar.showNotification("snackbar-success", "File downloaded successfully");
    
  } catch (error) {
    console.error('Download error:', error);
    this.snackbar.showNotification("snackbar-danger", "Failed to download file: " + error.message);
  }
}

// Helper method to detect MIME type from base64
private detectMimeTypeFromBase64(base64Data: string): string {
  if (!base64Data) return 'application/octet-stream';
  
  // Check for PDF signature
  if (base64Data.startsWith('JVBERi') || base64Data.includes('JVBERi')) {
    return 'application/pdf';
  }
  
  // Check for PNG signature
  if (base64Data.startsWith('iVBORw') || base64Data.includes('iVBORw')) {
    return 'image/png';
  }
  
  // Check for JPEG signature
  if (base64Data.startsWith('/9j/') || base64Data.includes('/9j/')) {
    return 'image/jpeg';
  }
  
  // Check for GIF signature
  if (base64Data.startsWith('R0lGOD') || base64Data.includes('R0lGOD')) {
    return 'image/gif';
  }
  
  return 'application/octet-stream';
}

// Helper method to validate base64
private isValidBase64(str: string): boolean {
  try {
    return btoa(atob(str)) === str;
  } catch (err) {
    return false;
  }
}

// Helper method to get file extension from MIME type
private getFileExtensionFromMimeType(mimeType: string): string {
  const extensionMap: { [key: string]: string } = {
    'application/pdf': '.pdf',
    'image/jpeg': '.jpg',
    'image/jpg': '.jpg',
    'image/png': '.png',
    'image/gif': '.gif',
    'application/msword': '.doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
    'text/plain': '.txt',
    'application/vnd.ms-excel': '.xls',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx'
  };
  
  return extensionMap[mimeType] || '';
}
previewDocument(row: any): void {
  const fileData = row.value.sImage;
  const mimeType = row.value.MimeType || this.detectMimeTypeFromBase64(fileData);
  const fileName = row.value.fileName || row.value.Description || 'document';
  
  if (!fileData) {
    this.snackbar.showNotification("snackbar-warning", "No file data available for preview");
    return;
  }
  
  try {
    // Handle both data URI format and raw base64
    let base64Data = fileData;
    if (fileData.includes(',')) {
      base64Data = fileData.split(',')[1];
    }
    
    // Check if base64 data is valid
    if (!this.isValidBase64(base64Data)) {
      this.snackbar.showNotification("snackbar-warning", "File data is corrupted or incomplete");
      return;
    }
    
    if (mimeType.includes('pdf')) {
      this.previewPdf(base64Data, fileName);
    } else if (mimeType.includes('image')) {
      this.previewImage(base64Data, fileName, mimeType);
    } else if (mimeType.includes('text')) {
      this.previewTextFile(base64Data, fileName);
    } else {
      this.snackbar.showNotification("snackbar-info", 
        "This file type cannot be previewed. Please download it to view.");
      this.downloadDocument(row);
    }
  } catch (error) {
    console.error('Preview error:', error);
    this.snackbar.showNotification("snackbar-danger", "Failed to preview file: " + error.message);
  }
}

private previewPdf(base64Data: string, fileName: string): void {
  // Create data URI
  const dataUri = `data:application/pdf;base64,${base64Data}`;
  
  // Open in new tab
  const pdfWindow = window.open('', '_blank');
  if (pdfWindow) {
    pdfWindow.document.write(`
      <html>
        <head>
          <title>${fileName}</title>
          <style>
            body, html { margin: 0; padding: 0; height: 100%; width: 100%; }
            embed { width: 100%; height: 100vh; border: none; }
            .error { padding: 20px; text-align: center; font-family: Arial, sans-serif; }
          </style>
        </head>
        <body>
          <embed src="${dataUri}" type="application/pdf">
          <script>
            // Check if PDF loaded successfully
            setTimeout(function() {
              const embed = document.querySelector('embed');
              if (embed && embed.offsetHeight === 0) {
                document.body.innerHTML = 
                  '<div class="error"><h3>PDF Preview Unavailable</h3>' +
                  '<p>The PDF file may be corrupted or incomplete.</p>' +
                  '<p>Please try downloading the file instead.</p></div>';
              }
            }, 2000);
          </script>
        </body>
      </html>
    `);
    pdfWindow.document.close();
  } else {
    this.snackbar.showNotification("snackbar-warning", "Please allow pop-ups to preview PDF files");
  }
}

private previewImage(base64Data: string, fileName: string, mimeType: string): void {
  // Create data URI
  const dataUri = `data:${mimeType};base64,${base64Data}`;
  
  // Open in new tab
  const imageWindow = window.open('', '_blank');
  if (imageWindow) {
    imageWindow.document.write(`
      <html>
        <head>
          <title>${fileName}</title>
          <style>
            body { margin: 0; display: flex; justify-content: center; align-items: center; 
                   height: 100vh; background: #f5f5f5; }
            img { max-width: 100%; max-height: 100%; }
            .error { padding: 20px; text-align: center; font-family: Arial, sans-serif; }
          </style>
        </head>
        <body>
          <img src="${dataUri}" alt="${fileName}" onerror="this.parentNode.innerHTML='<div class=error><h3>Image Preview Unavailable</h3><p>The image may be corrupted or incomplete.</p></div>'" />
        </body>
      </html>
    `);
    imageWindow.document.close();
  }
}

private previewTextFile(base64Data: string, fileName: string): void {
  try {
    const textContent = atob(base64Data);
    this.dialog.open(DocumentPreviewDialogComponent, {
      width: '80%',
      height: '80%',
      data: {
        content: textContent,
        fileName: fileName,
        mimeType: 'text/plain'
      }
    });
  } catch (error) {
    this.snackbar.showNotification("snackbar-warning", "Cannot preview text file: Invalid encoding");
  }
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

  if (!this.isCorporateClient()) {
    const totalAllocation = this.dataSource1.data.reduce((sum, kin) => sum + (kin.SharePercent || 0), 0);
    if (Math.abs(totalAllocation - 100) > 0.01) {
      this.snackbar.showNotification("snackbar-danger", 
        "Next Of Kin Total percentage allocation must be exactly 100%.");
      this.posting = false;
      return;
    }
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
    const rawForm = this.mngForm.getRawValue();
    const firstName = rawForm.FirstName || '';
    const middleName = rawForm.MiddleName || '';
    const lastName = rawForm.LastName || '';
    const companyName = this.corporateForm?.get('CompanyName')?.value || '';

    const derivedName = this.isCorporateClient()
      ? companyName
      : `${firstName} ${middleName} ${lastName}`.trim();

    const formValue = {
      ...rawForm,
      Name: derivedName,
      IsDOBGiven: !!rawForm.DateOfBirth,
      NextOfKin: this.dataSource1.data.map(kin => ({
        ...kin,
        ClientID: rawForm.ClientID || kin.ClientID
      })),
      EmploymentDetails: this.dataSource4.data,
      WFClientStatusID: rawForm.WFClientStatusID || 'A',
      OpenedBy: rawForm.OpenedBy || this.currentUser,
      CreatedBy: rawForm.CreatedBy || this.currentUser,
      CreatedOn: rawForm.CreatedOn || new Date().toISOString(),
      OpenedDate: rawForm.OpenedDate || new Date().toISOString(),
      UpdateCount: rawForm.UpdateCount || 0,
      NumberOfHouseMembers: rawForm.NumberOfHouseMembers || 1,
      CanDonateBlood: rawForm.CanDonateBlood || false,
      IsSalaried: rawForm.IsSalaried || false,
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

  approveClient(): void {
    if (!this.requestCode) {
      this.snackbar.showNotification("snackbar-warning", "No client ID found for approval");
      return;
    }

    Swal.fire({
      title: '<span style="font-size: 20px;">Approve Client</span>',
      html: '<p>You are about to approve this client record.</p><p>Please enter your verifier remarks below:</p>',
      input: "textarea",
      inputPlaceholder: "Type your approval remarks here...",
      confirmButtonText: "Approve",
      confirmButtonColor: "#28a745",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      icon: "question",
      inputValidator: (value) => {
        if (!value || value.trim() === '') {
          return "Please enter your approval remarks";
        }
        return null;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.posting = true;
        const verifierRemarks = result.value;

        // Prepare approval data with client ID and remarks
        const approvalData = {
          clientId: this.requestCode,
          status: 'APPROVED',
          verifierRemarks: verifierRemarks,
          verifiedBy: this.currentUser,
          verifiedOn: new Date().toISOString()
        };

        console.log('Approval data:', approvalData);

        // Call the approval service method
        this.employeeService.approve(this.requestCode)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              console.log('Approval response:', res);
              if (res.statusCode === 200 || res.statusCode === 201 || res.statusCode === 302) {
                this.snackbar.showNotification(
                  "snackbar-success",
                  res.message || "Client approved successfully"
                );
                
                // Navigate back or close dialog based on mode
                setTimeout(() => {
                  if (this.dialogMode) {
                    this.closeDialogEvent.emit();
                  } else {
                    this.router.navigate(['/erp-hr/employees/all-employees']);
                  }
                }, 1500);
              } else {
                this.snackbar.showNotification(
                  "snackbar-warning",
                  res.message || "Approval completed with warnings"
                );
              }
              this.posting = false;
            },
            error: (err) => {
              console.error('Approval error:', err);
              this.snackbar.showNotification(
                "snackbar-danger",
                err.message || "Failed to approve client"
              );
              this.posting = false;
            }
          });
      }
    });
  }


  // private setupFormPersistence(): void {
  //   const storedData = localStorage.getItem("mngFormDataEmployee");
  //   if (storedData) {
  //     this.mngForm.patchValue(JSON.parse(storedData));
  //     this.onPopulateTables(JSON.parse(storedData));
  //   }

  //   this.mngForm.valueChanges.subscribe((value) => {
  //     localStorage.setItem("mngFormDataEmployee", JSON.stringify(value));
  //   });
  // }

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
      checkFormInvalid(this.corporateForm, 'C');
    }

    const message = `Please fill in the following fields: ${invalidFields.join(", ")}`;
    this.snackbar.showNotification("snackbar-danger", message);
  }

  get clientTypeLabel(): string {
    const value = this.mngForm?.get('ClientTypeID')?.value;
    const match = this.clientTypeOptions.find(option => option.value === value);
    return match?.label || value || '-';
  }

  get relationshipManagerName(): string {
    const value = this.isCorporateClient()
      ? this.corporateForm?.get('RelationshipManager')?.value
      : this.mngForm?.get('RelationshipManager')?.value;
    const match = this.relationshipManagers.find(manager => manager.id === value);
    return match?.name || value || '-';
  }

  get totalNextOfKinShare(): number {
    return this.dataSource1.data.reduce((sum, kin) => sum + (Number(kin.SharePercent) || 0), 0);
  }

  get remainingNextOfKinShare(): number {
    return 100 - this.totalNextOfKinShare;
  }

  get nextOfKinCount(): number {
    return this.dataSource1?.data?.length || 0;
  }

  getRelationLabel(value: string | null | undefined): string {
    if (!value) {
      return '-';
    }
    return this.relationDisplayMap[value] || value;
  }

  generateClientId(): string {
    return 'CL' + Date.now() + Math.random().toString(36).substr(2, 6).toUpperCase();
  }

  generateRandomId(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }

  cancel(): void {
    if (this.dialogMode) {
      this.closeDialogEvent.emit();
    } else {
      this.router.navigate(["/erp-hr/employees/all-employees"]);
    }
  }

  searchClientById(): void {
    const clientId = this.mngForm.get('ClientID')?.value?.trim();
    if (!clientId) {
      this.snackbar.showNotification("snackbar-warning", "Please enter a Client ID");
      return;
    }

    this.isLoading = true;
    const formattedRequest = {
      RequestID: this.generateRandomId(),
      RequestData: {
        ClientID: clientId
      },
      RequestTime: new Date().toISOString(),
      AppName: "CLIENT_DATA"
    };

    this.employeeService.getClientById(formattedRequest)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.Details) {
            const normalizedDetails = this.normalizeClientFormData(res.Details);
            this.formData = normalizedDetails;
            this.pageFunction = "View";
            this.getPage();
            
            setTimeout(() => {
              this.onPopulateTables({ Details: normalizedDetails });
            });
            
            this.snackbar.showNotification("snackbar-success", "Client found and data loaded");
          } else {
            this.snackbar.showNotification("snackbar-info", "Client not found");
          }
          this.isLoading = false;
        },
        error: (err) => {
          this.snackbar.showNotification("snackbar-danger", "Error searching for client");
          this.isLoading = false;
        }
      });
  }

  openClientLookup(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '1200px';
    dialogConfig.maxHeight = '90vh';
    dialogConfig.panelClass = 'client-lookup-dialog';

    const dialogRef = this.dialog.open(ClientLookupDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.ClientID) {
        // Set the selected Client ID
        this.mngForm.patchValue({
          ClientID: result.ClientID
        });
        
        // Then search and load the client data
        this.searchClientById();
      }
    });
  }

  refresh1(): void {
    this.dataSource1.data = [...this.dataSource1.data];
    this.dataSource1.paginator = this.paginator1;
    this.dataSource1.sort = this.sort1;
    if (this.nextOfKinForm) {
      this.calculateRemainingAllocation(this.parTranAction1 === 'Update');
    }
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