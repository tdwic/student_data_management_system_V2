import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnouncementDetailsComponent } from './add-announcement-details.component';

describe('AddAnnouncementDetailsComponent', () => {
  let component: AddAnnouncementDetailsComponent;
  let fixture: ComponentFixture<AddAnnouncementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnnouncementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnnouncementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
