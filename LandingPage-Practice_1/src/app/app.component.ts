import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { StudentTestimonialComponent } from './components/student-testimonial/student-testimonial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainScreenComponent, StatisticsComponent, StudentTestimonialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}