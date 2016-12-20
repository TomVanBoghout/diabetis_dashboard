import {Routes, RouterModule} from "@angular/router";
import {MeasurementCalendarComponent} from "./measurement-calendar/measurement-calendar.component";
import {MeasurementComponent} from "./measurement/measurement.component";
import { ModuleWithProviders} from '@angular/core'
const routes: Routes = [
  {
    path: '',
    component: MeasurementCalendarComponent
  },
  {
    path: 'day/:id',
    component: MeasurementComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
