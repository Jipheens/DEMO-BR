import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationLookupComponent } from './job-application-lookup.component';

describe('JobApplicationLookupComponent', () => {
  let component: JobApplicationLookupComponent;
  let fixture: ComponentFixture<JobApplicationLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplicationLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
