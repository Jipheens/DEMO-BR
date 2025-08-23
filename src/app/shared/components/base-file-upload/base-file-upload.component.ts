import { Component, ElementRef, Input, OnInit } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: "app-base-file-upload",
  templateUrl: "./base-file-upload.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BaseFileUploadComponent,
      multi: true,
    },
  ],
  styleUrls: ["./base-file-upload.component.scss"],
})
export class BaseFileUploadComponent implements ControlValueAccessor {
  @Input() progress: any;
  onChange: Function;
  selectedFile: File | null = null;
  imagePreviews: string[] = [];

  constructor(private host: ElementRef<HTMLInputElement>) {}

  writeValue(value: null) {
    this.host.nativeElement.value = "";
    this.selectedFile = null;
    this.imagePreviews = [];
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {}

  getFileDetails(e) {

    console.log("ee:: ", e)

    this.selectedFile = e.target.files ? e.target.files[0] : null;
    this.imagePreviews = []; // Clear previews before processing new file

    if (this.selectedFile) {
      // File type validation (optional, adjust as needed)
      if (!this.selectedFile.type.startsWith("image/")) {
        console.error("Invalid file format. Please select image files only.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imagePreviews.push(event.target.result as string);
      };
      reader.readAsDataURL(this.selectedFile);
    }

    // Call onChange with base64 string (assuming single file selection)
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          this.onChange(reader.result as string);
        }
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  downloadImage(index: number) {
    if (this.selectedFile && this.imagePreviews.length > index) {
      const file = this.selectedFile[index];
      const blob = new Blob([file], { type: file.type });
      const url = window.URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = file.name;
      downloadLink.click();

      // Revoke object URL to prevent memory leaks
      window.URL.revokeObjectURL(url);
    } else {
      console.error("Invalid image index for download.");
    }
  }
}