import { Component } from '@angular/core';
import { MiniTitleComponent } from '../mini-title/mini-title.component';
import { StudentItemComponent } from '../student-item/student-item.component';

interface StudentsItem {
  id: number;
  author: string;
  spec: string;
  rating: string;
  text: string;
}

@Component({
  selector: 'app-student-testimonial',
  standalone: true,
  imports: [MiniTitleComponent, StudentItemComponent],
  templateUrl: './student-testimonial.component.html',
  styleUrl: './student-testimonial.component.scss'
})
export class StudentTestimonialComponent {
  public students: StudentsItem[] = [
    {id: 1, author: 'Michael Wong', spec: 'UI/UX Design Student', rating: '4.9', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!'},
    {id: 2, author: 'Avril Song', spec: 'Web Development Student', rating: '4.8', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!'},
    {id: 3, author: 'Jeane Wood', spec: 'Data Science Student', rating: '5.0', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!'}
  ]
}