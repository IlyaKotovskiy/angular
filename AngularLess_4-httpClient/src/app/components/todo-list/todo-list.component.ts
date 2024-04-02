import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../../services/todos.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]>
  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos()
  }
}
