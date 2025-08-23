import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLeaveBandsComponent } from './manage-leave-bands.component';

describe('ManageLeaveBandsComponent', () => {
  let component: ManageLeaveBandsComponent;
  let fixture: ComponentFixture<ManageLeaveBandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageLeaveBandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLeaveBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
