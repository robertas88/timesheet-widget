import { Component, Input, OnChanges } from '@angular/core';
import { IEvent } from 'src/app/app.service';

@Component({
  selector: 'tw-time-sheet-task-list',
  templateUrl: './time-sheet-task-list.component.html',
  styles: [
  ]
})
export class TimeSheetTaskListComponent implements OnChanges {

  @Input()
  events: IEvent[] | [];

  expensesTasks: IEvent[] | [];

  hoursTasks: IEvent[] | [];

  additionalHoursTasks: IEvent[] | [];

  event: IEvent | undefined;

  ngOnChanges(): void {
    this.event = this.events.length ? this.events[0] : undefined;

    this.hoursTasks = this.events?.filter((event: IEvent) => event.isHoursEventType);
    this.expensesTasks = this.events?.filter((event: IEvent) => event.isExpenseType);
    this.additionalHoursTasks = this.events?.filter((event: IEvent) => event.isAdditionalHoursEventType);
  }

}
