import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromState from 'src/app/Store';
import { Month, Result, Vocation } from 'src/app/Models';
import * as fromMonthActions from '../../Store/actions/month.action';


@Component({
  selector: 'app-vocation-container',
  templateUrl: './vocation-container.component.html',
  styleUrls: ['./vocation-container.component.css']
})
export class VocationContainerComponent implements OnInit {

  result$: Observable<Result>;
  errorMonth$:Observable<string>;
  errorResult$:Observable<string>;
  vocation: Vocation;
  month: Month[];
  step = 'month';

  constructor(
    private store: Store<fromState.AppState>
  ) { }

  ngOnInit() {
    this.errorMonth$ = this.store.pipe(select(fromState.selectMonthLoadFailure));
    this.errorResult$ = this.store.pipe(select(fromState.selectResultLoadFailure));
    this.store.pipe(select(fromState.getMonths))
      .subscribe(value => this.month = value);
  }

  onSubmitVocation(event){
    this.vocation = event;
    this.store.dispatch(new fromMonthActions.LoadMonths(this.vocation));
  }

}
