import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerMinComponent } from './datepicker-min/datepicker-min.component';
import { DatepickerMYComponent } from './datepicker-my/datepicker-my.component';
import { DatepickerMDYComponent } from './datepicker-mdy/datepicker-mdy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatepickerComponent, DatepickerMinComponent, DatepickerMYComponent, DatepickerMDYComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'datepickers';
}
