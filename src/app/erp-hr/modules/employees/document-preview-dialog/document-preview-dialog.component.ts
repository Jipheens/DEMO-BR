// document-preview-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-document-preview-dialog',
  template: `
    <div mat-dialog-title class="dialog-header">
      <h2 class="dialog-title">{{ data.fileName }}</h2>
      <button mat-icon-button (click)="onClose()" class="close-button">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    
    <div mat-dialog-content class="dialog-content">
      <div *ngIf="!errorMessage; else errorTemplate" class="file-content-container">
        <pre class="file-content">{{ data.content }}</pre>
      </div>
      <ng-template #errorTemplate>
        <div class="error-message">
          <mat-icon>error_outline</mat-icon>
          <h3>Unable to display content</h3>
          <p>{{ errorMessage }}</p>
        </div>
      </ng-template>
    </div>
    
    <div mat-dialog-actions class="dialog-actions">
      <button mat-button (click)="onClose()">Close</button>
      <button mat-raised-button color="primary" (click)="downloadFile()" [disabled]="!!errorMessage">
        <mat-icon>download</mat-icon>
        Download
      </button>
    </div>
  `,
  styles: [`
    .dialog-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .dialog-title {
      margin: 0;
      font-size: 18px;
    }
    
    .close-button {
      margin: -8px -8px 0 0;
    }
    
    .dialog-content {
      padding: 0;
      margin: 0;
      min-height: 300px;
      max-height: 60vh;
    }
    
    .file-content-container {
      padding: 16px;
      background: #fafafa;
    }
    
    .file-content {
      white-space: pre-wrap;
      word-wrap: break-word;
      margin: 0;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: 12px;
      line-height: 1.4;
    }
    
    .error-message {
      padding: 40px 20px;
      text-align: center;
      color: #f44336;
    }
    
    .error-message mat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      margin-bottom: 16px;
    }
    
    .error-message h3 {
      margin: 0 0 8px 0;
      font-weight: 500;
    }
    
    .error-message p {
      margin: 0;
      color: #666;
    }
    
    .dialog-actions {
      padding: 8px 16px 16px 16px;
      justify-content: flex-end;
      border-top: 1px solid #e0e0e0;
    }
  `]
})
export class DocumentPreviewDialogComponent {
  errorMessage: string = '';

  constructor(
    public dialogRef: MatDialogRef<DocumentPreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Validate content on initialization
    if (!data.content || typeof data.content !== 'string') {
      this.errorMessage = 'No content available for preview';
    } else if (data.content.length > 100000) { // Limit very large files
      this.errorMessage = 'File is too large to preview. Please download it instead.';
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  downloadFile(): void {
    try {
      const blob = new Blob([this.data.content], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = this.data.fileName || 'document.txt';
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      this.errorMessage = 'Failed to download file: ' + error.message;
    }
  }
}