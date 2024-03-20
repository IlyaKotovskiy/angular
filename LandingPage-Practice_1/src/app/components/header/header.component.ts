import { Component } from '@angular/core';

interface NavItem {
  id: number;
  title: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public nav: NavItem[] = [
    {id: 1, title: 'About us'},
    {id: 2, title: 'Our Class'},
    {id: 3, title: 'Blog'},
    {id: 4, title: 'Contact'},
  ]
}