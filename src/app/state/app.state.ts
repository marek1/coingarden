import { LatestOffer } from '../interfaces/latestOffer';
import { Provider } from '../interfaces/provider';

export interface AppState {
  coins: string[],
  offers: LatestOffer[],
  providers: Provider[]
}
