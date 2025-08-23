import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosureAnalysisComponent } from './closure-analysis.component';

describe('ClosureAnalysisComponent', () => {
  let component: ClosureAnalysisComponent;
  let fixture: ComponentFixture<ClosureAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosureAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosureAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
