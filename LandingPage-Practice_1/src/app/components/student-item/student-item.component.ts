import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-item',
  standalone: true,
  imports: [],
  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.scss'
})
export class StudentItemComponent {
  @Input() title: string;
  @Input() post: string;
  @Input() rating: string;
  @Input() descr: string;
}
