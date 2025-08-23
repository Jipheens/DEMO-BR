import { NgModule } from "@angular/core";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { SharedModule } from "../shared.module";
import { BaseComponent } from './base/base.component';
import { BaseFileUploadComponent } from './base-file-upload/base-file-upload.component';
import { D3OrgChartComponent } from './d3-org-chart/d3-org-chart.component';

@NgModule({
  declarations: [FileUploadComponent, BreadcrumbComponent, BaseComponent, BaseFileUploadComponent, D3OrgChartComponent],
  imports: [SharedModule],
  exports: [FileUploadComponent, BreadcrumbComponent, BaseFileUploadComponent, D3OrgChartComponent],
})
export class ComponentsModule { }
