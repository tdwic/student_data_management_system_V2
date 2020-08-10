import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAnnouncementDetailsComponent } from './manage-announcement-details.component';

describe('ManageAnnouncementDetailsComponent', () => {
  let component: ManageAnnouncementDetailsComponent;
  let fixture: ComponentFixture<ManageAnnouncementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAnnouncementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAnnouncementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
