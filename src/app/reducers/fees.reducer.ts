import { createReducer, on } from '@ngrx/store';
import {
  saveBitcoinFees,
  saveBlogs,
  saveBlogsError, saveEthereumFees,
  saveOffers,
  saveOffersError,
  saveProviders,
  saveProvidersError
} from '../actions';
import { LatestOffer } from '../interfaces/latestOffer';
import { Provider } from '../interfaces/provider';
import { BlogPost } from '../interfaces/blogPost';

export const featureKey = 'fees';

export interface State {
  bitcoinFees: number
  ethereumFees: number
}

const initialState: State = {
  bitcoinFees: 0,
  ethereumFees: 0
};

export const reducer = createReducer(
  initialState,
  on(saveBitcoinFees, (state, {bitcoinFees}) => ({ ...state, bitcoinFees})),
  on(saveEthereumFees, (state, {ethereumFees}) => ({ ...state, ethereumFees}))
);

export const getBitcoinFees = (state: State) => state.bitcoinFees;
export const getEthereumFees = (state: State) => state.ethereumFees;
