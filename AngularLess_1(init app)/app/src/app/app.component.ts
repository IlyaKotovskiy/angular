import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { NumberComponent } from './components/number/number.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet, UserListComponent, NumberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
  name = 'wrapper';
  isShow = false;
  number = 11;
  array = [1, 2, 3, 4, 5, 6];
  users = [
    {id: 1, name: 'Alex', age: 18},
    {id: 2, name: 'Steven', age: 19},
    {id: 3, name: 'Dima', age: 17},
    {id: 4, name: 'Neena', age: 15},
  ]
}
