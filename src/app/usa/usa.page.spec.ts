import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USAPage } from './usa.page';

describe('USAPage', () => {
  let component: USAPage;
  let fixture: ComponentFixture<USAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
