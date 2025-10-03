import {Sale} from './sale';

export interface User {
  username: string;
  roles: string[];
}

export interface ProfileView {
  userId: number;
  firstName: string;
  lastName: string;
  userImg: string;
  phone: string;
  credit: number;
  sales?: Sale[];
}
