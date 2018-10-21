import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail33Component } from './homedetail33.component';

describe('Homedetail33Component', () => {
  let component: Homedetail33Component;
  let fixture: ComponentFixture<Homedetail33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
