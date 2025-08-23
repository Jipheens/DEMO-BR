import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeaveBandsComponent } from './all-leave-bands.component';

describe('AllLeaveBandsComponent', () => {
  let component: AllLeaveBandsComponent;
  let fixture: ComponentFixture<AllLeaveBandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLeaveBandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLeaveBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
