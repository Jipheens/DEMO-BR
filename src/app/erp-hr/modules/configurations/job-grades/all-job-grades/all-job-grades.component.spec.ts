import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobGradesComponent } from './all-job-grades.component';

describe('AllJobGradesComponent', () => {
  let component: AllJobGradesComponent;
  let fixture: ComponentFixture<AllJobGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllJobGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJobGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
