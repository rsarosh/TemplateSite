import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainband3Component } from './mainband3.component';

describe('Mainband3Component', () => {
  let component: Mainband3Component;
  let fixture: ComponentFixture<Mainband3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mainband3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainband3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
