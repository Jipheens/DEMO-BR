import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsLookupComponent } from './departments-lookup.component';

describe('DepartmentsLookupComponent', () => {
  let component: DepartmentsLookupComponent;
  let fixture: ComponentFixture<DepartmentsLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
