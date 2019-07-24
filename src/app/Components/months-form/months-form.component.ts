import { Component, OnInit, Input } from '@angular/core';
import { Month } from 'src/app/Models';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-months-form',
  templateUrl: './months-form.component.html',
  styleUrls: ['./months-form.component.css']
})
export class MonthsFormComponent implements OnInit {

  @Input() months:Month[];
  formMonth:FormGroup;

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    moment.locale('ru');
  }

  initForm(){
    this.formMonth = this.fb.group({
      months: this.fb.array([])
    });
    this.months.forEach((value: Month) => {
      this.addMonth(value.month);
    });
  }

  private addMonth(month: Date) {    
    (<FormArray>this.formMonth.get("months")).push(
      new FormGroup({
        month: new FormControl(month),
        summ: new FormControl(0, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
        excludeCountDay: new FormControl(0, [Validators.required, Validators.pattern(/^[0-9]*$/)])
      })
    )
  }

}
