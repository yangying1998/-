import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail4Component } from './homedetail4.component';

describe('Homedetail4Component', () => {
  let component: Homedetail4Component;
  let fixture: ComponentFixture<Homedetail4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
