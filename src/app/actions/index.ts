import { createAction, props } from '@ngrx/store';

export const getCoins = createAction('[App] Retrieving coins');
export const saveCoins = createAction('[App] Saving coins',
  props<{ coins: string[] }>()
);


export const getOffers = createAction('[App] Retrieving offers');
export const getProviders = createAction('[App] Retrieving providers');
