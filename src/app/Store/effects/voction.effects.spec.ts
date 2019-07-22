import { TestBed } from "@angular/core/testing";
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { VocationEffect } from './vocation.effects';
import * as Actions from '../actions/month.action';
import { Observable } from 'rxjs';
import { VocationService } from 'src/app/Services/vocation.service';

import { Vocation, Month } from 'src/app/Models';

describe('Testing Effects', () => {
    let monthEffect:VocationEffect;
    let actions$: Observable<any>;
    let monthService;
    let months = [
        new Month(new Date(2019, 1), 100, 7),
        new Month(new Date(2019, 2), 100, 0),
        new Month(new Date(2019, 3), 100, 0),
        new Month(new Date(2019, 4), 100, 0),
        new Month(new Date(2019, 5), 173, 3)
      ];
  
      let vocation = new Vocation(new Date(2019,7, 1),28);

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
        ],
        providers: [
          VocationEffect,
          /*
          provideMockActions(() => actions$),
          {
            provide: VocationService,
            useValue: jasmine.createSpyObj('vocationService', ['getMonths'])
          }
          */
         ]
      }));

/*

      monthEffect = TestBed.get(MonthEffect);
      monthService = TestBed.get(monthService);

      it('should work', () => {
        const action = new Actions.LoadMonths(vocation);
        const completion = new Actions.LoadMonthsSuccess(months);
     
        actions$ = hot('--a-', { a: action });
        const expected = cold('--b', { b: completion });
     
        expect(monthEffect.loadMonths$).toBeObservable(expected);
      });
      */
})