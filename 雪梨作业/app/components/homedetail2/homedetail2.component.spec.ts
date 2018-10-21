import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail2Component } from './homedetail2.component';

describe('Homedetail2Component', () => {
  let component: Homedetail2Component;
  let fixture: ComponentFixture<Homedetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
