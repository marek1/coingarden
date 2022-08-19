import { createReducer, on } from '@ngrx/store';
import { saveCoins } from '../actions';

export const featureKey = 'coins';

export interface State {
  isLoading: boolean;
  errorMessage: string | null;
  coins: string[]
}

const initialState: State = {
  isLoading: false,
  errorMessage: '',
  coins: []
};

export const reducer = createReducer(
  initialState,
  on(saveCoins, (state, {coins}) => ({ ...state, coins })),
);

export const getCoins = (state: State) => state.coins;
