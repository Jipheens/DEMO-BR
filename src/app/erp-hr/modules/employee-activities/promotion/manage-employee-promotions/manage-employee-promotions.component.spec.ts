import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeePromotionsComponent } from './manage-employee-promotions.component';

describe('ManageEmployeePromotionsComponent', () => {
  let component: ManageEmployeePromotionsComponent;
  let fixture: ComponentFixture<ManageEmployeePromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEmployeePromotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployeePromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
