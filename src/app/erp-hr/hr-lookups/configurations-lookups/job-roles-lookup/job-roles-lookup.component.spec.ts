import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRolesLookupComponent } from './job-roles-lookup.component';

describe('JobRolesLookupComponent', () => {
  let component: JobRolesLookupComponent;
  let fixture: ComponentFixture<JobRolesLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobRolesLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRolesLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
