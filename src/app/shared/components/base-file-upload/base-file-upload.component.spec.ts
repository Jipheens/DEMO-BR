import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFileUploadComponent } from './base-file-upload.component';

describe('BaseFileUploadComponent', () => {
  let component: BaseFileUploadComponent;
  let fixture: ComponentFixture<BaseFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
