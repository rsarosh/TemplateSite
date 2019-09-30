import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainband1Component } from './mainband1.component';

describe('Mainband1Component', () => {
  let component: Mainband1Component;
  let fixture: ComponentFixture<Mainband1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mainband1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainband1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
