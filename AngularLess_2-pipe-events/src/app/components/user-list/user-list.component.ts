import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { FormsModule } from '@angular/forms';

interface UserItem {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  public users: Array<UserItem> = [
    {id: 1, name: 'Alex', age: 18},
    {id: 2, name: 'Steven', age: 19},
    {id: 3, name: 'Dima', age: 17},
    {id: 4, name: 'Neena', age: 15},
  ]
  public inputName: string = '';
  public inputAge: string = '';

  public deleteLastUser(): void {
    this.users.pop();
  }
  public deleteUserById(id: number): void {
    this.users = this.users.filter(el => el.id !== id)
  }
  public addNewUser(): void {
    const newUser: UserItem = {
      id: Date.now(),
      name: this.inputName,
      age: +this.inputAge
    };
    this.users.push(newUser);
  }
}
