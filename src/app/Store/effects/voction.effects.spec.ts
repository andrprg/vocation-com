import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { ReplaySubject } from "rxjs";

import { MonthEffect } from "./month.effects";
import * as MyActions from  "../actions/month.action";

describe("Testing Month Effects", () => {
  let monthEffect: MonthEffect;
  let actions: ReplaySubject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [MonthEffect, provideMockActions(() => actions)]
    });
    monthEffect = TestBed.get(MonthEffect);
  });

  it("должен работать (LOAD_MONTHS_SUCCESS)", () => {
    actions = new ReplaySubject(1);
    actions.next(MyActions.LOAD_MONTHS);

    monthEffect.loadMonths$.subscribe(result => {
      expect(result).toEqual(MyActions.LOAD_MONTHS_SUCCESS);
    });
  });

});
