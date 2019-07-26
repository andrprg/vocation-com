import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsFormComponent } from './months-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateToNamePipe } from 'src/app/Pipes/date-to-name.pipe';
import { Month, Vocation } from 'src/app/Models';

describe('MonthsFormComponent', () => {
  let component: MonthsFormComponent;
  let fixture: ComponentFixture<MonthsFormComponent>;
  let element;
  let months: Month[] = null;
  let vocation: Vocation = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthsFormComponent, DateToNamePipe],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsFormComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  beforeEach(() => {
    months = [
      new Month(new Date(2019, 1), 100, 7),
      new Month(new Date(2019, 2), 100, 0),
      new Month(new Date(2019, 3), 100, 0),
      new Month(new Date(2019, 4), 100, 0),
      new Month(new Date(2019, 5), 173, 3)
    ];

    vocation = new Vocation(new Date(2019,7, 1),28);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('должно быть нужное количество input', () => {
    component.months = months;
    fixture.detectChanges();
    const cnt = element.querySelectorAll('input').length;
    console.log(element.querySelectorAll('tr'));
    expect(cnt).toEqual(5);
  });
});
