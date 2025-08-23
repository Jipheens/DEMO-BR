import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLeaveTypesComponent } from './manage-leave-types.component';

describe('ManageLeaveTypesComponent', () => {
  let component: ManageLeaveTypesComponent;
  let fixture: ComponentFixture<ManageLeaveTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageLeaveTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLeaveTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
