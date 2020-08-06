import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonServiceComponent } from './common-service.component';

describe('CommonServiceComponent', () => {
  let component: CommonServiceComponent;
  let fixture: ComponentFixture<CommonServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
