import { Component, OnInit, OnDestroy, Output, EventEmitter  } from '@angular/core';
import { Vocation } from 'src/app/Models';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.formGroup = this.fb.group({
      dateFrom: new FormControl(null, [Validators.required]),
      dateFromWork: new FormControl(null),
      isFromWork: new FormControl(false),
      countDay: new FormControl(28, [
        Validators.required,
        Validators.pattern(/^[1-9]*$/)
      ])
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe;
  }

}
