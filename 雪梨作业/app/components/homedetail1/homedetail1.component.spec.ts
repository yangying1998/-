import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail1Component } from './homedetail1.component';

describe('Homedetail1Component', () => {
  let component: Homedetail1Component;
  let fixture: ComponentFixture<Homedetail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
