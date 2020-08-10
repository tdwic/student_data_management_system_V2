import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExamMarksDetailsComponent } from './manage-exam-marks-details.component';

describe('ManageExamMarksDetailsComponent', () => {
  let component: ManageExamMarksDetailsComponent;
  let fixture: ComponentFixture<ManageExamMarksDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExamMarksDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExamMarksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
