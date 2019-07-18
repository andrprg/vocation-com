import { Action } from '@ngrx/store';
import { Vocation, Month, Result } from '../../Models';

export const LOAD_RESULT = '[Result] Load Result';
export const LOAD_RESULT_SUCCESS = '[Result] Load Result Success';
export const LOAD_RESULT_FAIL = '[Result] Load Result Fail';

export class LoadResult implements Action{
    readonly type = LOAD_RESULT;
    constructor(
        public vocation: Vocation,
        public months: Month[]
    ){}
}

export class LoadResultSuccess implements Action{
    readonly type = LOAD_RESULT_SUCCESS;
    constructor(
        public payload: Result
    ){}
}

export class LoadResultFail implements Action{
    readonly type = LOAD_RESULT_FAIL;
    constructor(
        public error: any
    ){}
}

export type All = LoadResult| LoadResultSuccess | LoadResultFail;