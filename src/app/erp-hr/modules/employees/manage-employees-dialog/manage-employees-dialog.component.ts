import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ManageEmployeesDialogData {
  action: string;
  clientId?: string;
  clientTypeId?: string;
  prefillClientId?: boolean;
}

@Component({
  selector: 'app-manage-employees-dialog',
  templateUrl: './manage-employees-dialog.component.html',
  styleUrls: ['./manage-employees-dialog.component.sass']
})
export class ManageEmployeesDialogComponent implements OnInit {
  dialogTitle: string = 'Client Maintenance';

  constructor(
    public dialogRef: MatDialogRef<ManageEmployeesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ManageEmployeesDialogData
  ) {}

  ngOnInit(): void {
    // Set dialog title based on action
    switch (this.data.action) {
      case 'Add':
        this.dialogTitle = 'Add New Client';
        break;
      case 'Update':
        this.dialogTitle = 'Edit Client';
        break;
      case 'View':
        this.dialogTitle = 'View Client Details';
        break;
      case 'Supervise':
        this.dialogTitle = 'Supervise Client';
        break;
      default:
        this.dialogTitle = 'Client Maintenance';
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
