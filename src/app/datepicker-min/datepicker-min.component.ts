import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-datepicker-min',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './datepicker-min.component.html',
  styleUrl: './datepicker-min.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerMinComponent {
  private readonly _currentYear = new Date().getFullYear();
  readonly minDate = new Date(this._currentYear - 1, 0, 1);
  readonly maxDate = new Date(this._currentYear + 0, 8, 6);
}
