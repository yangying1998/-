import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail32Component } from './homedetail32.component';

describe('Homedetail32Component', () => {
  let component: Homedetail32Component;
  let fixture: ComponentFixture<Homedetail32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
