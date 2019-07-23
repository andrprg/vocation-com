import { Component, OnInit, OnDestroy, Output, EventEmitter, ChangeDetectionStrategy   } from '@angular/core';
import { Vocation } from 'src/app/Models';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vocation',
  templateUrl: './vocation-form.component.html',
  styleUrls: ['./vocation-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocationFormComponent implements OnInit, OnDestroy{

  formGroup: FormGroup;
  private sub: Subscription;
  isFromWork:boolean = false;
  @Output() onVocation = new EventEmitter<Vocation>();

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
      dateWork.reset();
    }
    dateWork.updateValueAndValidity();     
  }

  onSubmit({dateFrom,dateFromWork,countDay}) {
    const data = new Vocation(
      new Date(dateFrom),
      countDay,
      this.isFromWork ? new Date(dateFromWork) : null
    )
    this.onVocation.emit(data);    
  }  

}
