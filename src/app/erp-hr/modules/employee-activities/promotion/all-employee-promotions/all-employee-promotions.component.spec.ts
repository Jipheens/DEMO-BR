import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeePromotionsComponent } from './all-employee-promotions.component';

describe('AllEmployeePromotionsComponent', () => {
  let component: AllEmployeePromotionsComponent;
  let fixture: ComponentFixture<AllEmployeePromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployeePromotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmployeePromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
