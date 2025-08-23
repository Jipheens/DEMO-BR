import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeLookupComponent } from './paye-lookup.component';

describe('PayeLookupComponent', () => {
  let component: PayeLookupComponent;
  let fixture: ComponentFixture<PayeLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
