import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {IMeasurement} from "./models/dd-measurement";
import {IDailyMeasurement} from "./models/dd-daily-measurement";

@Injectable()
export class MeasurementsService {
  private _measurementsUrl = "app/data/measurements.json";
  private _dailyMeasurementsUrl = "app/data/measurements-daily.json";

  constructor(private _http: Http) { }

  getMeasurements(): Observable<IMeasurement[]> {
    return this._http.get(this._measurementsUrl)
      .map((response: Response) => <IMeasurement[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getDailyMeasurements(): Observable<IDailyMeasurement[]> {
    return this._http.get(this._dailyMeasurementsUrl)
      .map((response: Response) => <IDailyMeasurement[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getDay(id: number): Observable<IDailyMeasurement> {
    console.log("MeasurementsService - getDay(" + id + ")");
    return this.getDailyMeasurements()
      .do(data => console.log('DAYFULL: ' + JSON.stringify(data)))
      .map((days: IDailyMeasurement[]) => days.find(d => d.id == id))
      //.map((measurements: IDailyMeasurement[]) => measurements[0])
      .do(data => console.log('DAY: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getMeasurement(id: number): Observable<IMeasurement> {
    return this.getMeasurements()
      .map((measurements: IMeasurement[]) => measurements.find(m => m.id === id));
  }



  private handleError(error: Response) {
    console.log("ERRRROOORRR");
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
