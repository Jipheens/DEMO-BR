import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJobGradesComponent } from './manage-job-grades.component';

describe('ManageJobGradesComponent', () => {
  let component: ManageJobGradesComponent;
  let fixture: ComponentFixture<ManageJobGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageJobGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageJobGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
