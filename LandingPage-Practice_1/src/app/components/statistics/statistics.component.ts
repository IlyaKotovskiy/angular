import { Component } from '@angular/core';

interface StatisticsItem {
  id: number;
  title: string;
  descr: string;
}

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  public statistics: StatisticsItem[] = [
    {id: 1, title: '15+', descr: 'Years of experience'},
    {id: 2, title: '100k', descr: 'Students worldwide'},
    {id: 3, title: '45+', descr: 'Class subjects'},
    {id: 4, title: '98%', descr: 'Student satisfactions'},
  ]
}