import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail51Component } from './homedetail51.component';

describe('Homedetail51Component', () => {
  let component: Homedetail51Component;
  let fixture: ComponentFixture<Homedetail51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
