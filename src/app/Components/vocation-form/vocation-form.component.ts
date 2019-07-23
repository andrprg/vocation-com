import { Component, OnInit, OnDestroy, Output, EventEmitter  } from '@angular/core';
import { Vocation } from 'src/app/Models';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vocation',
  templateUrl: './vocation-form.component.html',
  styleUrls: ['./vocation-form.component.css']
})
export class VocationFormComponent implements OnInit, OnDestroy{

  @Output() onSubmit = new EventEmitter<Vocation>();
  formGroup: FormGroup;
  private sub: Subscription;
  isFromWork:boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.formGroup = this.fb.group({
      dateFrom: new FormControl(null, [Validators.required]),
      dateFromWork: new FormControl(null),
      countDay: new FormControl(28, [
        Validators.required,
        Validators.pattern(/^[1-9]*$/)
      ])
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe;
  }

  toggleDateFromWorkValidator(){
    this.isFromWork = !this.isFromWork;
    const dateWork = this.formGroup.get('dateFromWork');
    const dateFromWorkValidators: ValidatorFn[] = [
      Validators.required
    ];   
    if (this.isFromWork) {
      dateWork.setValidators(dateFromWorkValidators);
    } else {
      dateWork.clearValidators();
    }
    dateWork.updateValueAndValidity();     
  }

}
