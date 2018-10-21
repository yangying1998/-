import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail52Component } from './homedetail52.component';

describe('Homedetail52Component', () => {
  let component: Homedetail52Component;
  let fixture: ComponentFixture<Homedetail52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
