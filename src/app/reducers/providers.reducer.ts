import { createReducer, on } from '@ngrx/store';
import { saveOffers, saveOffersError, saveProviders, saveProvidersError } from '../actions';
import { LatestOffer } from '../interfaces/latestOffer';
import { Provider } from '../interfaces/provider';

export const featureKey = 'providers';

export interface State {
  errorMessage: string | null;
  providers: Provider[]
}

const initialState: State = {
  errorMessage: '',
  providers: []
};

export const reducer = createReducer(
  initialState,
  on(saveProviders, (state, {providers}) => ({ errorMessage: '', providers })),
  on(saveProvidersError, (state, {errorMessage}) => ({ ...state, errorMessage })),
);

export const getProviders = (state: State) => state.providers;
export const getProvidersError = (state: State) => state.errorMessage;
