import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeeTransfersComponent } from './manage-employee-transfers.component';

describe('ManageEmployeeTransfersComponent', () => {
  let component: ManageEmployeeTransfersComponent;
  let fixture: ComponentFixture<ManageEmployeeTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEmployeeTransfersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployeeTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
