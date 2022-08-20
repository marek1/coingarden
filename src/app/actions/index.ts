import { createAction, props } from '@ngrx/store';

export const getCoins = createAction('[App] Retrieving coins');
export const saveCoins = createAction('[App] Saving coins SUCCESS',
  props<{ coins: string[] }>()
);
export const saveCoinsError = createAction('[App] Saving coins ERROR',
  props<{ errorMessage: string }>()
);


export const getOffers = createAction('[App] Retrieving offers');
export const getProviders = createAction('[App] Retrieving providers');
