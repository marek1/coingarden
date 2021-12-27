import { LatestOffer } from './latestOffer';
import { Observable } from 'rxjs';

export interface Product {
  belongs_to_strategy_id: number;
  de: string;
  name: string;
  url: string;
  howTo: {
    text: string;
    steps: string;
    image: string;
    video: string;
    blog: string;
  };
  feesInPercentMin: number;
  feesInPercentMax: number;
  offers?: Observable<LatestOffer[]>;
}
