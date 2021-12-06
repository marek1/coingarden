import { Product } from './product';

export interface Provider {
  id: string;
  name: string;
  provider_type: string;
  description: string;
  functionality: string;
  products: Product[];
  url:  string;
  logo_url: string;
  country: string;
  affiliate_id: string;
  costsOfWithdrawalOfAssets: number;
  costsOfDepositing: number;
  rewardForSignup: number;
  rewardCondition: string;
}
