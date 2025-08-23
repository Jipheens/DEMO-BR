import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhifLookupComponent } from './nhif-lookup.component';

describe('NhifLookupComponent', () => {
  let component: NhifLookupComponent;
  let fixture: ComponentFixture<NhifLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhifLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhifLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
