import { createReducer, on } from '@ngrx/store';
import { saveOffers, saveOffersError } from '../actions';
import { LatestOffer } from '../interfaces/latestOffer';

export const featureKey = 'offers';

export interface State {
  errorMessage: string | null;
  offers: LatestOffer[]
}

const initialState: State = {
  errorMessage: '',
  offers: []
};

export const reducer = createReducer(
  initialState,
  on(saveOffers, (state, {offers}) => ({ errorMessage: '', offers })),
  on(saveOffersError, (state, {errorMessage}) => ({ ...state, errorMessage })),
);

export const getOffers = (state: State) => state.offers;
export const getOffersError = (state: State) => state.errorMessage;
