import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/erp-hr/data/employee-services/employee-management.service';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';

export interface ClientSearchData {
  ClientID: string;
  Name: string;
  IDNumber: string;
  MobileNo: string;
  LegacyAccountID: string;
}

interface SearchField {
  mode: 'Like' | 'Exact';
  value: string;
}

type SearchCriteria = Record<'ClientID' | 'Name' | 'IDNumber' | 'MobileNo' | 'LegacyAccountID', SearchField>;

@Component({
  selector: 'app-client-lookup-dialog',
  templateUrl: './client-lookup-dialog.component.html',
  styleUrls: ['./client-lookup-dialog.component.sass']
})
export class ClientLookupDialogComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  displayedColumns = ['ClientID', 'Name', 'IDNumber', 'MobileNo', 'LegacyAccountID'];
  dataSource: MatTableDataSource<ClientSearchData>;
  searchResults: ClientSearchData[] = [];
  isLoading = false;
  
  searchCriteria: SearchCriteria = this.createDefaultCriteria();

  constructor(
    public dialogRef: MatDialogRef<ClientLookupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService
  ) {
    super();
    this.dataSource = new MatTableDataSource<ClientSearchData>([]);
  }

  ngOnInit(): void {
    // Optionally load some initial data
    this.performSearch();
  }

  private createDefaultCriteria(): SearchCriteria {
    const defaultField = (): SearchField => ({ mode: 'Like', value: '' });
    return {
      ClientID: defaultField(),
      Name: defaultField(),
      IDNumber: defaultField(),
      MobileNo: defaultField(),
      LegacyAccountID: defaultField()
    };
  }

  performSearch(): void {
    this.isLoading = true;
    
    // Generate random request ID
    const requestId = this.generateRandomId();
    
    const criteriaConfig: Array<{ column: string; field: SearchField }> = [
      { column: 'clientId', field: this.searchCriteria.ClientID },
      { column: 'Name', field: this.searchCriteria.Name },
      { column: 'IDNumber', field: this.searchCriteria.IDNumber },
      { column: 'MobileNo', field: this.searchCriteria.MobileNo },
      { column: 'LegacyAccountID', field: this.searchCriteria.LegacyAccountID }
    ];

    const whereClauses = criteriaConfig
      .map(({ column, field }) => this.buildWhereClause(column, field))
      .filter((clause): clause is string => !!clause);

    const whereStmt = whereClauses.length > 0
      ? whereClauses.join(' AND ')
      : "clientId like '%%'";
    
    // Build search request matching all-employees component format
    const searchRequest = {
      RequestID: requestId,
      RequestData: {
        SearchID: "clientId",
        Filter: "",  // No filter to get all client types
        WhereStmt: whereStmt,
        SortBy: "clientId desc",
        PrevOrNext: "1",
        Reference: "",
        LoggedInUserId: "jipheens",
        ModuleID: 1000,
        OurBranchID: "002"
      },
      RequestTime: new Date().toISOString(),
      AppName: "CLIENT_DATA"
    };

    console.log("Client Lookup Search Request:", searchRequest);

    this.subs.sink = this.employeeService.searchClients(searchRequest).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log("Client Lookup Response:", response);
        
        let results = response?.Details?.SearchResults;
        
        // Handle both array and single object responses
        if (!Array.isArray(results)) {
          results = results ? [results] : [];
        }
        
        if (results.length === 0) {
          this.searchResults = [];
          this.dataSource.data = [];
        } else {
          // Map the results to match our interface
          this.searchResults = results.map((item: any) => ({
            ClientID: item.ClientID || item.clientId || '',
            Name: item.Name || item.fullName || '',
            IDNumber: item.IDNumber || item.nationalId || '',
            MobileNo: item.MobileNo || item.mobileNo || '',
            LegacyAccountID: item.LegacyAccountID || item.legacyAccountID || ''
          }));
          
          this.dataSource.data = this.searchResults;
          console.log("Processed search results:", this.searchResults);
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error searching clients:', error);
        this.searchResults = [];
        this.dataSource.data = [];
      }
    });
  }

  selectClient(client: ClientSearchData): void {
    this.dialogRef.close(client);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  clearSearch(): void {
    this.searchCriteria = this.createDefaultCriteria();
    this.performSearch();
  }

  generateRandomId(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  private buildWhereClause(column: string, field: SearchField): string | null {
    const value = field.value?.trim();
    if (!value) {
      return null;
    }

    const sanitizedValue = value.replace(/'/g, "''");
    if (field.mode === 'Exact') {
      return `${column} = '${sanitizedValue}'`;
    }

    return `${column} like '%${sanitizedValue}%'`;
  }
}
