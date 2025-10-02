import {Category} from './category';

export interface Item {
  itemId: number
  itemName: string
  itemDesc: any
  itemImg: string
  category: Category
}
