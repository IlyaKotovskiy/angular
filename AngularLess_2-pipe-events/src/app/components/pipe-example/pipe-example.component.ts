import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { InitCapPipe } from '../../pipes/initCap.pipe';

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe, DecimalPipe, InitCapPipe],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.scss'
})
export class PipeExampleComponent {
  public title: string = 'AngularLess_2-pipe';
  public testValue: string = 'hello WORLD';
  public price: number = 100;
  public currentDate: Date = new Date();
}
