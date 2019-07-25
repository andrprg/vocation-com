import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsFormComponent } from './months-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateToNamePipe } from 'src/app/Pipes/date-to-name.pipe';

describe('MonthsFormComponent', () => {
  let component: MonthsFormComponent;
  let fixture: ComponentFixture<MonthsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthsFormComponent, DateToNamePipe],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
