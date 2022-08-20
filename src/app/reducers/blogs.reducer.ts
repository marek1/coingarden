import { createReducer, on } from '@ngrx/store';
import { saveBlogs, saveBlogsError, saveOffers, saveOffersError, saveProviders, saveProvidersError } from '../actions';
import { LatestOffer } from '../interfaces/latestOffer';
import { Provider } from '../interfaces/provider';
import { BlogPost } from '../interfaces/blogPost';

export const featureKey = 'blogs';

export interface State {
  errorMessage: string | null;
  blogs: BlogPost[]
}

const initialState: State = {
  errorMessage: '',
  blogs: []
};

export const reducer = createReducer(
  initialState,
  on(saveBlogs, (state, {blogs}) => ({ errorMessage: '', blogs: blogs.slice().sort((a, b) => a.date > b.date ? -1 : 1) })),
  on(saveBlogsError, (state, {errorMessage}) => ({ ...state, errorMessage })),
);

export const getBlogs = (state: State) => state.blogs;
export const getBlogsError = (state: State) => state.errorMessage;
