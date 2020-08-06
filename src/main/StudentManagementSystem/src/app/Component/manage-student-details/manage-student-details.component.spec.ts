import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStudentDetailsComponent } from './manage-student-details.component';

describe('ManageStudentDetailsComponent', () => {
  let component: ManageStudentDetailsComponent;
  let fixture: ComponentFixture<ManageStudentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStudentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
