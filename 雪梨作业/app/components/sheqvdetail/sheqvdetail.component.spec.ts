import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheqvdetailComponent } from './sheqvdetail.component';

describe('SheqvdetailComponent', () => {
  let component: SheqvdetailComponent;
  let fixture: ComponentFixture<SheqvdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheqvdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheqvdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
