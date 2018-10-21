import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail13Component } from './homedetail13.component';

describe('Homedetail13Component', () => {
  let component: Homedetail13Component;
  let fixture: ComponentFixture<Homedetail13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
