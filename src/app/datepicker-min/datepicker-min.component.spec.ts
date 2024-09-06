import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMinComponent } from './datepicker-min.component';

describe('DatepickerMinComponent', () => {
  let component: DatepickerMinComponent;
  let fixture: ComponentFixture<DatepickerMinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerMinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
