import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() public id: number;
  @Input() public name: string;
  @Input() public age: number;

  @Output() public deleteUserById: EventEmitter<any> = new EventEmitter();
  
  public deleteUser(): void {
    this.deleteUserById.emit(this.id)
  }
}

// Task 1. Реализуйте метод который удалит последнего пользователя
// Task 2. Реализуйте добавление нового пользоветля через инпут по нажатию на кнопку add new user