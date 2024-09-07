import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonFabComponent } from './button-fab/button-fab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonFabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
