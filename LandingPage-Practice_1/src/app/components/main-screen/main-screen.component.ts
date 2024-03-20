import { Component } from '@angular/core';
import { MiniTitleComponent } from '../mini-title/mini-title.component';
import { ButtonComponent } from '../../UI/button/button.component';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [MiniTitleComponent, ButtonComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss'
})
export class MainScreenComponent {

}