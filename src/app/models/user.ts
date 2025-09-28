export interface User {
  username: string;
  roles: string[];
  profile?: UserProfile | null;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  userImg: string;
  phone: string;
  credit: number;
}
