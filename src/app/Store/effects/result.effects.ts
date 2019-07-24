import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { VocationService } from 'src/app/Services/vocation.service';
import * as fromActions from '../actions/result.action';
import { Vocation, Month } from 'src/app/Models';

@Injectable()
export class ResultEffect {
    constructor(
        private vocationService: VocationService,
        private actions$: Actions
    ) { }

    @Effect()
    loadResult$: Observable<Action> = this.actions$
        .pipe(
            ofType<fromActions.LoadResult>(fromActions.LOAD_RESULT),
            map(result => {
               return {vocation: result.vocation, month: result.months}
            }),
            switchMap(ob =>
                this.vocationService.getResult(ob.vocation, ob.month)
                    .pipe(
                        map(value => new fromActions.LoadResultSuccess(value)),
                        catchError(error => of(new fromActions.LoadResultFail(error)))

                    )
            )
        )
}