import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TimeSheetComponent } from './components/time-sheet/time-sheet.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TimeSheetCalendarComponent } from './components/time-sheet/time-sheet-calendar/time-sheet-calendar.component';
import { CommonModule, DatePipe } from '@angular/common';
import { TimeSheetTaskListComponent } from './components/time-sheet/time-sheet-task-list/time-sheet-task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeSheetComponent,
    TimeSheetCalendarComponent,
    TimeSheetTaskListComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
