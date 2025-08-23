import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollBargraphComponent } from './payroll-bargraph.component';

describe('PayrollBargraphComponent', () => {
  let component: PayrollBargraphComponent;
  let fixture: ComponentFixture<PayrollBargraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollBargraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollBargraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
