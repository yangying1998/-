import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail11Component } from './homedetail11.component';

describe('Homedetail11Component', () => {
  let component: Homedetail11Component;
  let fixture: ComponentFixture<Homedetail11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
