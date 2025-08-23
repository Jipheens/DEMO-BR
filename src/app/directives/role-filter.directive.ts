import { AfterViewInit, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { RoleFilterService } from '../core/service/role-filter.service';

@Directive({
  selector: '[roleFilter]'
})
export class RoleFilterDirective implements AfterViewInit{
  @Input("roleFilter") roles: string[];

  constructor(private view: ViewContainerRef,
    private template: TemplateRef<any>,
    private roleFilterService: RoleFilterService) { }

  ngAfterViewInit() {
    if (this.roleFilterService.hasAllRoles(this.roles)) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }

  }

}
