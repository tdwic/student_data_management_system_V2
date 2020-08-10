import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnnouncementDetailsComponent } from './update-announcement-details.component';

describe('UpdateAnnouncementDetailsComponent', () => {
  let component: UpdateAnnouncementDetailsComponent;
  let fixture: ComponentFixture<UpdateAnnouncementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAnnouncementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnnouncementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
