import * as monthReducer from './month.reducer';
import { LoadMonths, LoadMonthsSuccess, LoadMonthsFail } from '../actions/month.action';
import { Month, Vocation } from 'src/app/Models';



describe('MonthReducer', () => {
    const data: Month[] = [
        new Month(new Date()),
        new Month(new Date()),
        new Month(new Date())
    ];
    const vocation: Vocation = new Vocation(new Date());

    it('должен вернуть состояние по умолчанию', () => {
        const { initialState } = monthReducer;
        const action = { type: 'NONE' } as any;
        const state = monthReducer.MonthReducer(undefined, action);
        expect(state).toBe(initialState);
    });


    it('Тестирование LOAD_MONTH', () => {
        const { initialState } = monthReducer;
        const state = monthReducer.MonthReducer(initialState, new LoadMonths(vocation));

        expect(state.loading).toBeTruthy();
    });


    it('Тестирование LOAD_MONTH_SUCCESS', () => {
        const { initialState } = monthReducer;
        const state = monthReducer.MonthReducer(initialState, new LoadMonthsSuccess(data));
        expect(state).toEqual({
            ...initialState,
            month: data,
            loading: false
        });
    });

    it('Тестирование LOAD_FAIL', () => {
        const { initialState } = monthReducer;
        const state = monthReducer.MonthReducer(initialState, new LoadMonthsFail('Error'));
        expect(state).toEqual({
            ...initialState,
            error: 'Error',
            loading: false
        });
    });


});
