import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeeDocumentsComponent } from './manage-employee-documents.component';

describe('ManageEmployeeDocumentsComponent', () => {
  let component: ManageEmployeeDocumentsComponent;
  let fixture: ComponentFixture<ManageEmployeeDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEmployeeDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployeeDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
