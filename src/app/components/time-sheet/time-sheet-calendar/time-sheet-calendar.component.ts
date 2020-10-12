import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IEvent } from 'src/app/app.service';

@Component({
  selector: 'tw-time-sheet-calendar',
  templateUrl: './time-sheet-calendar.component.html',
  styles: [
  ]
})
export class TimeSheetCalendarComponent implements OnInit, OnChanges {

  @Input()
  events: IEvent[] | undefined;

  event: IEvent | undefined;

  @Output()
  getEvents: EventEmitter<string> = new EventEmitter();

  week: {
    date: string,
    hasEvent: boolean;
  }[] = [];

  selected = 6;

  constructor(
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.generateCalendar();
  }

  ngOnChanges(): void {
    this.event = this.events.length ? this.events[0] : undefined;
  }

  private transformDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  selectDay(date: string, selected: number): void {
    this.selected = selected;
    this.getEvents.emit(date);
  }

  selectToday(): void {
    this.selected = 6;
    this.getEvents.emit(this.week[6].date);
  }

  generateCalendar(): void {
    this.week = [];
    let date = (new Date()).getTime() - 6 * 24 * 3600000;
    for (let i = 0; i < 7; i++) {
      this.week.push({
        date: this.transformDate(new Date(date)),
        hasEvent: !!Math.round(Math.random()),
      });
      date += 24 * 3600000;
    }
  }

}
