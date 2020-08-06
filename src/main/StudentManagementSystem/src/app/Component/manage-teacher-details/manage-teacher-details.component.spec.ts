import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeacherDetailsComponent } from './manage-teacher-details.component';

describe('ManageTeacherDetailsComponent', () => {
  let component: ManageTeacherDetailsComponent;
  let fixture: ComponentFixture<ManageTeacherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTeacherDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeacherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
