import { Action } from '@ngrx/store';
import { Month, Vocation } from '../../Models';

export const LOAD_MONTHS = '[MONTHS] Load Months';
export const LOAD_MONTHS_SUCCESS = '[MONTHS] Load Months Success';
export const LOAD_MONTHS_FAIL = '[MONTHS] Load Months Fail';

export class LoadMonths implements Action{
    readonly type = LOAD_MONTHS;
    constructor(
        public payload: Vocation
    ){}
}

export class LoadMonthsSuccess implements Action{
    readonly type = LOAD_MONTHS_SUCCESS;
    constructor(
        public payload: Month[]
    ){}
}

export class LoadMonthsFail implements Action{
    readonly type = LOAD_MONTHS_FAIL;
    constructor(
        public error: any
    ){}
}

export type All = LoadMonths | LoadMonthsSuccess | LoadMonthsFail;