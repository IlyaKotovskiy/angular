import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-title',
  standalone: true,
  imports: [],
  templateUrl: './mini-title.component.html',
  styleUrl: './mini-title.component.scss'
})
export class MiniTitleComponent {
  @Input() title: string;
}
