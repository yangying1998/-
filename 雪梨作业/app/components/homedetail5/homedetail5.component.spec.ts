import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetail5Component } from './homedetail5.component';

describe('Homedetail5Component', () => {
  let component: Homedetail5Component;
  let fixture: ComponentFixture<Homedetail5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetail5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
