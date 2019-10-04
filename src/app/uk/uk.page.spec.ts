import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkPage } from './uk.page';

describe('UkPage', () => {
  let component: UkPage;
  let fixture: ComponentFixture<UkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
