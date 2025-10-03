import {ProfileView} from './user';
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
  seller: ProfileView
  item: Item
  bidLst: Array<Bid>
}
