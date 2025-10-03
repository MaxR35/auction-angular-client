import {ProfileView} from './user';

export interface Bid {
  bidId: number;
  bidTime: Date;
  bidAmount: number;
  user: ProfileView;
}


