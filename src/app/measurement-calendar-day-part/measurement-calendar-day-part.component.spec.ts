/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeasurementCalendarDayPartComponent } from './measurement-calendar-day-part.component';

describe('MeasurementCalendarDayPartComponent', () => {
  let component: MeasurementCalendarDayPartComponent;
  let fixture: ComponentFixture<MeasurementCalendarDayPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementCalendarDayPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementCalendarDayPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
