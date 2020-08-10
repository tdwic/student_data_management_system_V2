import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMarkDetailsComponent } from './update-mark-details.component';

describe('UpdateMarkDetailsComponent', () => {
  let component: UpdateMarkDetailsComponent;
  let fixture: ComponentFixture<UpdateMarkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMarkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMarkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
