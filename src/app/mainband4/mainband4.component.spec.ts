import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainband4Component } from './mainband4.component';

describe('Mainband4Component', () => {
  let component: Mainband4Component;
  let fixture: ComponentFixture<Mainband4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mainband4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainband4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
