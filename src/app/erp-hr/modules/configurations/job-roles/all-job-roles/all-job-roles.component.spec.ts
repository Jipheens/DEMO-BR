import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobRolesComponent } from './all-job-roles.component';

describe('AllJobRolesComponent', () => {
  let component: AllJobRolesComponent;
  let fixture: ComponentFixture<AllJobRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllJobRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJobRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
