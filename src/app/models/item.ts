import {Categorie} from './categorie';

export interface Item {
  itemId: number
  itemName: string
  itemDesc: any
  itemImg: string
  categorie: Categorie
}
