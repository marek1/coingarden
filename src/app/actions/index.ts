import { createAction, props } from '@ngrx/store';
import { LatestOffer } from '../interfaces/latestOffer';
import { Provider } from '../interfaces/provider';
import { BlogPost } from '../interfaces/blogPost';

export const getCoins = createAction('[App] Retrieving coins');
export const saveCoins = createAction('[App] Saving coins SUCCESS',
  props<{ coins: string[] }>()
);
export const saveCoinsError = createAction('[App] Saving coins ERROR',
  props<{ errorMessage: string }>()
);

export const getOffers = createAction('[App] Retrieving offers');
export const saveOffers = createAction('[App] Saving offers SUCCESS',
  props<{ offers: LatestOffer[] }>()
);
export const saveOffersError = createAction('[App] Saving offers ERROR',
  props<{ errorMessage: string }>()
);

export const getProviders = createAction('[App] Retrieving providers');
export const saveProviders = createAction('[App] Saving providers SUCCESS',
  props<{ providers: Provider[] }>()
);
export const saveProvidersError = createAction('[App] Saving providers ERROR',
  props<{ errorMessage: string }>()
);

export const getBlogs = createAction('[App] Retrieving blogs');
export const saveBlogs = createAction('[App] Saving blogs SUCCESS',
  props<{ blogs: BlogPost[] }>()
);
export const saveBlogsError = createAction('[App] Saving blogs ERROR',
  props<{ errorMessage: string }>()
);

export const getBitcoinFees = createAction('[App] Retrieving BitcoinFees');
export const saveBitcoinFees = createAction('[App] Saving BitcoinFees SUCCESS',
  props<{ bitcoinFees: number }>()
);

export const getEthereumFees = createAction('[App] Retrieving EthereumFees');
export const saveEthereumFees = createAction('[App] Saving EthereumFees SUCCESS',
  props<{ ethereumFees: number }>()
);
