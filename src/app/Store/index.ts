import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

import { ResultState } from './reducers/result.reducer';
import { MonthState } from './reducers/month.reducer';
import * as MonthReducer from './reducers/month.reducer';
import * as ResultReducer from './reducers/result.reducer';


export interface AppState {
    monthState: MonthState;
    resultState: ResultState
}

export const reducers: ActionReducerMap<AppState> = {
    monthState: MonthReducer.MonthReducer,
    resultState: ResultReducer.ResultReducer 
  };

export const getMonthState = createFeatureSelector<MonthState>('monthState');
export const getMonths = createSelector(
    getMonthState,
    (state:MonthState) => state.month
);


export const getResultState = createFeatureSelector<ResultState>('resultState');
export const getResult = createSelector(
    getResultState,
    (state:ResultState) => state.result
);