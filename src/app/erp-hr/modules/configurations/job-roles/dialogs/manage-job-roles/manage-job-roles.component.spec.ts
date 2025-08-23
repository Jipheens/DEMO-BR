import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJobRolesComponent } from './manage-job-roles.component';

describe('ManageJobRolesComponent', () => {
  let component: ManageJobRolesComponent;
  let fixture: ComponentFixture<ManageJobRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageJobRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageJobRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
