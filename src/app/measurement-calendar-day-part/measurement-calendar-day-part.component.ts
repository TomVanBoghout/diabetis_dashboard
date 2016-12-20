import {Component, OnInit, Input} from '@angular/core';
import {IMeasurement} from "../models/dd-measurement";

@Component({
  selector: 'app-measurement-calendar-day-part',
  templateUrl: './measurement-calendar-day-part.component.html',
  styleUrls: ['./measurement-calendar-day-part.component.scss']
})
export class MeasurementCalendarDayPartComponent implements OnInit {
  @Input() measeurement: IMeasurement;

  constructor() { }

  ngOnInit() {
  }

}
