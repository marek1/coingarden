import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { InjectionToken } from '@angular/core';
import * as fromCoins from './coins.reducer';
import * as fromOffers from './offers.reducer';
import * as fromProviders from './providers.reducer';
import * as fromBlogs from './blogs.reducer';
import * as fromFees from './fees.reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface AppState {
  [fromCoins.featureKey]: fromCoins.State;
  [fromOffers.featureKey]: fromOffers.State;
  [fromProviders.featureKey]: fromProviders.State;
  [fromBlogs.featureKey]: fromBlogs.State;
  [fromFees.featureKey]: fromFees.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    [fromCoins.featureKey]: fromCoins.reducer,
    [fromOffers.featureKey]: fromOffers.reducer,
    [fromProviders.featureKey]: fromProviders.reducer,
    [fromBlogs.featureKey]: fromBlogs.reducer,
    [fromFees.featureKey]: fromFees.reducer,
  })
});

// console.log all actions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();
    return result;
  };
}


/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];

/**
 * Companies Reducers
 */

export const selectCoinsState = createFeatureSelector<AppState, fromCoins.State>(
  fromCoins.featureKey
);

export const getCoins = createSelector(
  selectCoinsState,
  fromCoins.getCoins
);

export const getCoinsError = createSelector(
  selectCoinsState,
  fromCoins.getCoinsError
);


export const selectOffersState = createFeatureSelector<AppState, fromOffers.State>(
  fromOffers.featureKey
);

export const getOffers = createSelector(
  selectOffersState,
  fromOffers.getOffers
);

export const getOffersError = createSelector(
  selectOffersState,
  fromOffers.getOffersError
);


export const selectProvidersState = createFeatureSelector<AppState, fromProviders.State>(
  fromProviders.featureKey
);

export const getProdivers = createSelector(
  selectProvidersState,
  fromProviders.getProviders
);

export const getProvidersError = createSelector(
  selectProvidersState,
  fromProviders.getProvidersError
);

export const selectBlogsState = createFeatureSelector<AppState, fromBlogs.State>(
  fromBlogs.featureKey
);

export const getBlogs = createSelector(
  selectBlogsState,
  fromBlogs.getBlogs
);

export const getBlogsError = createSelector(
  selectBlogsState,
  fromBlogs.getBlogsError
);

export const selectFeesState = createFeatureSelector<AppState, fromFees.State>(
  fromFees.featureKey
);

export const getBitcoinFees = createSelector(
  selectFeesState,
  fromFees.getBitcoinFees
);

export const getEthereumFees = createSelector(
  selectFeesState,
  fromFees.getEthereumFees
);


