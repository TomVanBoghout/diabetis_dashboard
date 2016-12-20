import { Component, OnInit, Input } from '@angular/core';
import {IMeasurement} from "../models/dd-measurement";
import {IDailyMeasurement} from "../models/dd-daily-measurement";
import {MeasurementsService} from "../measurements.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.scss']
})
export class MeasurementComponent implements OnInit {
  day: IDailyMeasurement;

  constructor(private _measurementsService: MeasurementsService,
              private router: Router,
              private route: ActivatedRoute ) {}

  ngOnInit() {
    console.log("MeasurementComponent - ngOnInit( )");
    this._measurementsService.getDay(this.route.snapshot.params['id'])
        .subscribe(day => this.day = day);
    console.log("MeasurementComponent - ngOnInit() - " + this.day);
  }

}
