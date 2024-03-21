import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-data',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './event-data.component.html',
  styleUrl: './event-data.component.scss'
})
export class EventDataComponent {
  public count: number = 0;
  public dates: Array<Date> = [
    new Date('2020-04-23'),
    new Date('2022-09-23'),
    new Date('2023-07-23'),
    new Date('2022-05-23'),
    new Date('2022-01-23'),
  ]

  public handleClick(): void {
    console.log('click');
  }
  public increment(): void {
    this.count++;
  }
  public keyHandle(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      console.log('Pressed enter')
    } else console.log(e.key);
  }
  public createCurrentDate(): void {
    const curDate: Date = new Date();
    this.dates.push(curDate);
  }
}
