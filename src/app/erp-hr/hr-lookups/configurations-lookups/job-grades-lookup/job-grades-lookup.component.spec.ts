import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGradesLookupComponent } from './job-grades-lookup.component';

describe('JobGradesLookupComponent', () => {
  let component: JobGradesLookupComponent;
  let fixture: ComponentFixture<JobGradesLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobGradesLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobGradesLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
