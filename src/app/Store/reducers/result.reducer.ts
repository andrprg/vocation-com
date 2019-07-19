import * as ResultAction from '../actions/result.action';
import { Result } from 'src/app/Models';

export type Actions = ResultAction.All;

export interface ResultState {
    result: Result,
    loading?: boolean,
    error?: any
}

export const initialState: ResultState = {
    result: new Result(0,0),
    loading: false
}

export function ResultReducer(state: ResultState = initialState, action: Actions) {
    switch (action.type) {
        case ResultAction.LOAD_RESULT:
            return {
                ...state,
                loading: true
            }
        case ResultAction.LOAD_RESULT_SUCCESS:
            return {
                ...state,
                result: action.payload,
                loading: false
            }
        case ResultAction.LOAD_RESULT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: {
            return state;
        }
    }
}