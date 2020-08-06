import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertExamMarksComponent } from './insert-exam-marks.component';

describe('InsertExamMarksComponent', () => {
  let component: InsertExamMarksComponent;
  let fixture: ComponentFixture<InsertExamMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertExamMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertExamMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
