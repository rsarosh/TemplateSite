import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainband2Component } from './mainband2.component';

describe('Mainband2Component', () => {
  let component: Mainband2Component;
  let fixture: ComponentFixture<Mainband2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mainband2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainband2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
