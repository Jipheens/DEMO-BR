import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ManageEmployeesDialogComponent } from '../manage-employees-dialog/manage-employees-dialog.component';
import { ManageEmployeesDialogData } from '../manage-employees-dialog/manage-employees-dialog.component';

@Component({
  selector: 'app-manage-employees-launcher',
  templateUrl: './manage-employees-launcher.component.html',
  styleUrls: ['./manage-employees-launcher.component.sass']
})
export class ManageEmployeesLauncherComponent implements OnInit, OnDestroy {
  private dialogRef: MatDialogRef<ManageEmployeesDialogComponent> | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Defer dialog opening until after the current call stack to ensure the route is fully initialised
    Promise.resolve().then(() => {
      this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
        this.openDialog(params);
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }

  private openDialog(params: Params): void {
    if (this.dialogRef) {
      return;
    }

    const dialogData = this.buildDialogData(params);

    const dialogConfig = new MatDialogConfig<ManageEmployeesDialogData>();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '92vw';
    dialogConfig.maxWidth = '1500px';
    dialogConfig.maxHeight = '98vh';
    dialogConfig.height = '96vh';
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.data = dialogData;

    this.dialogRef = this.dialog.open(ManageEmployeesDialogComponent, dialogConfig);

    this.dialogRef.afterClosed().pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.dialogRef = null;
      this.navigateAway();
    });
  }

  private buildDialogData(params: Params): ManageEmployeesDialogData {
    const action = typeof params['action'] === 'string' && params['action'].trim() !== ''
      ? params['action']
      : 'Add';

    const clientId = typeof params['requestCode'] === 'string' ? params['requestCode'] : '';
    const clientTypeId = typeof params['ClientTypeID'] === 'string' ? params['ClientTypeID'] : '';
    const prefillClientId = this.parseBooleanParam(params['prefillClientId']) && !!clientId;

    return {
      action,
      clientId,
      clientTypeId,
      prefillClientId
    };
  }

  private parseBooleanParam(value: any): boolean {
    if (typeof value === 'boolean') {
      return value;
    }
    if (typeof value === 'string') {
      return ['true', '1', 'yes', 'y'].includes(value.toLowerCase());
    }
    return false;
  }

  private navigateAway(): void {
    // Always land on the All Clients list after closing the dialog to keep UX consistent
    this.router.navigate(['/erp-hr/employees/all-employees']);
  }
}
