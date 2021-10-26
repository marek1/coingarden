import { Risks } from '../data/risks';

export interface Strategy {
  id: number;
  name: string;
  riskLevel: number;
  de: string;
  int_url: string;
  howTo: Object;
  blackListCoins: string[];
}
