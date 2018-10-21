import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail3Component } from './homedetail3.component';

describe('Homedetail3Component', () => {
  let component: Homedetail3Component;
  let fixture: ComponentFixture<Homedetail3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
