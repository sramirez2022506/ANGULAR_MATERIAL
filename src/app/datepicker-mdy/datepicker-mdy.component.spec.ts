import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMDYComponent } from './datepicker-mdy.component';

describe('DatepickerMDYComponent', () => {
  let component: DatepickerMDYComponent;
  let fixture: ComponentFixture<DatepickerMDYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerMDYComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerMDYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
