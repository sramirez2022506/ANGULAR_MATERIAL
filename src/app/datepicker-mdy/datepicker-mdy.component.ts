import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import * as _moment from 'moment';

import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-datepicker-mdy',
  standalone: true,
  providers: [provideMomentDateAdapter(MY_FORMATS)],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './datepicker-mdy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './datepicker-mdy.component.css'
})
export class DatepickerMDYComponent {
  readonly date = new FormControl(moment());
}
