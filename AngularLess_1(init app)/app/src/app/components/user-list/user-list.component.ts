import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  // Для получения пропа, используется @Input().
  // Необоходимо указать тип входного пропа.
  @Input() users: any;
  @Input() isShow: boolean;
  @Input() name: string;

  srcImage = 'https://public-library.narod.ru/Gogol.Nikolai/Gogol_Portrait.jpg';
}
