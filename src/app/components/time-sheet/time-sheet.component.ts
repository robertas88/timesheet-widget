import { Component, OnInit } from '@angular/core';
import { AppService, IEvent } from 'src/app/app.service';

@Component({
  selector: 'tw-time-sheet',
  templateUrl: './time-sheet.component.html',
  styles: [
  ]
})
export class TimeSheetComponent implements OnInit {

  events: IEvent[] = [];

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.getEvents('2020-10-08');
  }

  getEvents(date: string): void {
    this.appService.getEvents(date)
      .subscribe(events => {
        this.events = events;
        console.log(events);
      });
  }

}
