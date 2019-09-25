import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JapanPage } from './japan.page';

describe('JapanPage', () => {
  let component: JapanPage;
  let fixture: ComponentFixture<JapanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JapanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JapanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
