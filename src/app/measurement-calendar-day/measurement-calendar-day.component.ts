import {Component, OnInit, Input} from '@angular/core';
import {IDailyMeasurement} from "../models/dd-daily-measurement";
import {Router} from "@angular/router";

@Component({
  selector: 'app-measurement-calendar-day',
  templateUrl: './measurement-calendar-day.component.html',
  styleUrls: ['./measurement-calendar-day.component.scss']
})
export class MeasurementCalendarDayComponent implements OnInit {
  @Input() day: IDailyMeasurement;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  editDay(){
    this.router.navigate(['/day', this.day.id]);
  }
}
