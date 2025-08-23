import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeePortalAccountComponent } from './create-employee-portal-account.component';

describe('CreateEmployeePortalAccountComponent', () => {
  let component: CreateEmployeePortalAccountComponent;
  let fixture: ComponentFixture<CreateEmployeePortalAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeePortalAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeePortalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
