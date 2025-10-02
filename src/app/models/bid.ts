import {UserProfile} from './user';

export interface Bid {
  bidId: number;
  bidTime: string;
  bidAmount: number;
  user: UserProfile;
}
