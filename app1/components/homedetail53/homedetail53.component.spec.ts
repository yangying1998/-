import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail53Component } from './homedetail53.component';

describe('Homedetail53Component', () => {
  let component: Homedetail53Component;
  let fixture: ComponentFixture<Homedetail53Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
