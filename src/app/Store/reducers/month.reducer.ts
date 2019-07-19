import * as MonthAction from '../actions/month.action';
import { Month } from 'src/app/Models';

export type Actions = MonthAction.All;

export interface MonthState {
    month: Month[],
    loading?: boolean,
    error?: any
}

export const initialState: MonthState = {
    month: [],
    loading: false
}

export function MonthReducer(state: MonthState = initialState, action: Actions) {
    switch (action.type) {
        case MonthAction.LOAD_MONTHS:
            return {
                ...state,
                loading: true
            }
        case MonthAction.LOAD_MONTHS_SUCCESS:
            return {
                ...state,
                month: action.payload,
                loading: false
            }
        case MonthAction.LOAD_MONTHS_FAIL:
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