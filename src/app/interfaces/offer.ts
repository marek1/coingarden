export interface Offer {
  id: string;
  name: string;
  type: string;
  provider: string;
  coins: [string];
  avgAnnualInterestRate: number;
  duration: number;
  startDate: Date;
  endDate: Date;
  url: string;
  rewardToken: string;
  rewardTokenRatio: number;
  updated: string;
}
