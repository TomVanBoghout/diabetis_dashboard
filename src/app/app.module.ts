import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdCoreModule } from '@angular2-material/core';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';
import { MdListModule } from '@angular2-material/list';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdGridListModule} from '@angular2-material/grid-list';

import { AppComponent } from './app.component';
import { MeasurementComponent } from './measurement/measurement.component';
import {MeasurementsService} from "./measurements.service";
import { MeasurementCalendarComponent } from './measurement-calendar/measurement-calendar.component';
import { MeasurementCalendarDayComponent } from './measurement-calendar-day/measurement-calendar-day.component';
import { MeasurementCalendarDayPartComponent } from './measurement-calendar-day-part/measurement-calendar-day-part.component';
import {routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    MeasurementComponent,
    MeasurementCalendarComponent,
    MeasurementCalendarDayComponent,
    MeasurementCalendarDayPartComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCoreModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdInputModule,
    MdToolbarModule,
    MdCheckboxModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdSidenavModule,
    MdTabsModule,
    MdGridListModule
  ],
  providers: [
    MdIconRegistry,
    MeasurementsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
