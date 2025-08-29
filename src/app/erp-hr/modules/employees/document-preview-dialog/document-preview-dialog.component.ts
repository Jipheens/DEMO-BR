import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-document-preview-dialog',
  template: `
    <div mat-dialog-title>
      <h2>{{ data.fileName }}</h2>
      <button mat-icon-button (click)="onClose()" class="close-button">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    
    <div mat-dialog-content>
      <pre class="file-content">{{ data.content }}</pre>
    </div>
    
    <div mat-dialog-actions>
      <button mat-button (click)="onClose()">Close</button>
      <button mat-raised-button color="primary" (click)="downloadFile()">
        <mat-icon>download</mat-icon>
        Download
      </button>
    </div>
  `,
  styles: [`
    .file-content {
      white-space: pre-wrap;
      word-wrap: break-word;
      max-height: 60vh;
      overflow: auto;
      background: #f5f5f5;
      padding: 16px;
      border-radius: 4px;
    }
    .close-button {
      position: absolute;
      top: 8px;
      right: 8px;
    }

    .existing-file-info {
  display: flex;
  align-items: center;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 4px;
}

.existing-file-info mat-icon {
  margin-right: 8px;
  color: #757575;
}

.file-name {
  font-weight: 500;
  margin-right: 8px;
}

.file-type {
  color: #757575;
  font-size: 0.9em;
}

  `]
})
export class DocumentPreviewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DocumentPreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  downloadFile(): void {
    const blob = new Blob([this.data.content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = this.data.fileName;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}