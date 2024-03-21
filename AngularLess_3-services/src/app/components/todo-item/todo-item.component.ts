import { Component, Input, inject } from '@angular/core';
import { TodoListService } from '../../service/todo-list.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() public id: number;
  @Input() public title: string;
  @Input() public completed: boolean;

  public TodoService = inject(TodoListService);
}
