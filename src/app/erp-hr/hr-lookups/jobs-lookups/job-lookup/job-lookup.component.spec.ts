import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobLookupComponent } from './job-lookup.component';

describe('JobLookupComponent', () => {
  let component: JobLookupComponent;
  let fixture: ComponentFixture<JobLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
