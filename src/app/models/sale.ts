import {User, UserProfile} from './user';
import {Item} from './item';
import {Bid} from './bid';

export interface Sale {
  saleId: number
  startingDate: string
  endingDate: string
  startingPrice: number
  salePrice: number
  status: string
  currentBid: number
  seller: UserProfile
  item: Item
  bidLst: Array<Bid>
}
