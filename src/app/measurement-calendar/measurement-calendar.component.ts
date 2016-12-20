import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IDailyMeasurement} from "../models/dd-daily-measurement";
import {MeasurementsService} from "../measurements.service";

@Component({
  selector: 'app-measurement-calendar',
  templateUrl: './measurement-calendar.component.html',
  styleUrls: ['./measurement-calendar.component.scss']
})
export class MeasurementCalendarComponent implements OnInit {
  days: Observable<IDailyMeasurement[]>;

  constructor(private _measurementsService: MeasurementsService) { }

  ngOnInit() {
    this.days = this._measurementsService.getDailyMeasurements();
  }

}
