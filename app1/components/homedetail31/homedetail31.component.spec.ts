import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail31Component } from './homedetail31.component';

describe('Homedetail31Component', () => {
  let component: Homedetail31Component;
  let fixture: ComponentFixture<Homedetail31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
