import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';

export interface IEvent {
  date: string;
  tasksCount: number;
  firstTaskStart: string;
  lastTaskEnd: string;
  quantity: number;
  price: number | null;
  eventTypeName: string;
  isExpenseType: boolean;
  isHoursEventType: boolean;
  isAdditionalHoursEventType: boolean;
  isWorkHour: boolean;
  isApproved: boolean;
  isRejected: boolean;
}

const TYPES = ['Building', 'Repairing', 'Resting', 'Eating', 'Sleeping', 'Walking', 'Playing'];

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private datePipe: DatePipe,
  ) { }

  private transformDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  private transformDateHhMm(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm');
  }


  getEvents(date: string): Observable<IEvent[]> {
    return of(this.generate(date));
  }

  generate(date: string): IEvent[] {
    const result: IEvent[] = [];

    const count =  Math.round(Math.random() * 11) + 3;

    for (let i = 0; i < count; i++) {

      const isApproved = Math.round(Math.random() + 0.3) === 1;
      const type = Math.round(Math.random() * 3) + 1;

      result.push(
        {
          date,
          tasksCount: 5,
          firstTaskStart: date + ' 08:00',
          lastTaskEnd: date + ' 17:00',
          quantity: Math.round(Math.random() * 10) + 1,
          price: Math.round(Math.random() * 10000) / 100,
          eventTypeName: TYPES[Math.round(Math.random() * 6)],
          isExpenseType:  type === 2,
          isHoursEventType: type !== 1 && type !== 2,
          isAdditionalHoursEventType: type === 1,
          isWorkHour: type !== 2,
          isApproved,
          isRejected: !isApproved,
        }
      );
    }

    return result;
  }

}





