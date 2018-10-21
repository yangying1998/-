import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail12Component } from './homedetail12.component';

describe('Homedetail12Component', () => {
  let component: Homedetail12Component;
  let fixture: ComponentFixture<Homedetail12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
