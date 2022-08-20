import { createReducer, on } from '@ngrx/store';
import { saveCoins, saveCoinsError } from '../actions';

export const featureKey = 'coins';

export interface State {
  errorMessage: string | null;
  coins: string[]
}

const initialState: State = {
  errorMessage: '',
  coins: []
};

export const reducer = createReducer(
  initialState,
  on(saveCoins, (state, {coins}) => ({ errorMessage: '', coins })),
  on(saveCoinsError, (state, {errorMessage}) => ({ ...state, errorMessage })),
);

export const getCoins = (state: State) => state.coins;
export const getCoinsError = (state: State) => state.errorMessage;
