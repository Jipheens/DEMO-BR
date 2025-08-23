import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeeDemotionsComponent } from './manage-employee-demotions.component';

describe('ManageEmployeeDemotionsComponent', () => {
  let component: ManageEmployeeDemotionsComponent;
  let fixture: ComponentFixture<ManageEmployeeDemotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEmployeeDemotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployeeDemotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
