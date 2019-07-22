import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { VocationService } from 'src/app/Services/vocation.service';
import * as fromActions from '../actions/month.action';
import { Vocation } from 'src/app/Models';

@Injectable()
export class MonthEffect{
    constructor(
        private vocationService: VocationService,
        private actions$: Actions
    ) { }

    @Effect()
    loadMonths$: Observable<Action> = this.actions$
        .pipe(
            ofType<fromActions.LoadMonths>(fromActions.LOAD_MONTHS),
            map(month => month.payload),
            switchMap((vocation: Vocation) =>
                this.vocationService.getMonths(vocation)
                    .pipe(
                        map(value => new fromActions.LoadMonthsSuccess(value),
                            catchError(error => of(new fromActions.LoadMonthsFail(error)))
                        )
                    )
            )
        )
}