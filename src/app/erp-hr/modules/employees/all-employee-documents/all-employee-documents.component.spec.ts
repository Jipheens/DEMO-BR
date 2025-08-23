import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeeDocumentsComponent } from './all-employee-documents.component';

describe('AllEmployeeDocumentsComponent', () => {
  let component: AllEmployeeDocumentsComponent;
  let fixture: ComponentFixture<AllEmployeeDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployeeDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmployeeDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
