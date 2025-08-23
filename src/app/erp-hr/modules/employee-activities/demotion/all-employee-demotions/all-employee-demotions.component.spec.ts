import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeeDemotionsComponent } from './all-employee-demotions.component';

describe('AllEmployeeDemotionsComponent', () => {
  let component: AllEmployeeDemotionsComponent;
  let fixture: ComponentFixture<AllEmployeeDemotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployeeDemotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmployeeDemotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
