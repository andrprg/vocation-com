import * as resultReducer from './result.reducer';
import { LoadResult, LoadResultSuccess, LoadResultFail} from '../actions/result.action';
import { Month, Vocation, Result } from 'src/app/Models';



describe('ResultReducer', () => {
    const data: Month[] = [
        new Month(new Date()),
        new Month(new Date()),
        new Month(new Date())
    ];
    const vocation: Vocation = new Vocation(new Date());
    const result = new Result(0,0);

    it('должен вернуть состояние по умолчанию', () => {
        const { initialState } = resultReducer;
        const action = { type: 'NONE' } as any;
        const state = resultReducer.ResultReducer(undefined, action);
        expect(state).toBe(initialState);
    });


    it('Тестирование LOAD_RESULT', () => {
        const { initialState } = resultReducer;
        const state = resultReducer.ResultReducer(initialState, new LoadResult(vocation,data));

        expect(state.loading).toBeTruthy();
    });

    it('Тестирование LOAD_RESULT_SUCCESS', () => {
        const { initialState } = resultReducer;
        const state = resultReducer.ResultReducer(initialState, new LoadResultSuccess(result));
        expect(state).toEqual({
            ...initialState,
            result: result,
            loading: false
        });
    });

    it('Тестирование LOAD_RESULT_FAIL', () => {
        const { initialState } = resultReducer;
        const state = resultReducer.ResultReducer(initialState, new LoadResultFail('Error'));
        expect(state).toEqual({
            ...initialState,
            error: 'Error',
            loading: false
        });
    });

});
