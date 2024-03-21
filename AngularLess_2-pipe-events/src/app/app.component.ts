import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { EventDataComponent } from './components/event-data/event-data.component';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipeExampleComponent, FormDataComponent, EventDataComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}