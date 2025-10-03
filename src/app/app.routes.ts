import { Routes } from '@angular/router';
import {AppLayoutComponent} from './shared/layouts/app-layout.component/app-layout.component';
import {HomePageComponent} from './features/home/page/home-page.component';
import {AuctionPageComponent} from './features/auction/page/auction-page.component';
import {authGuard} from './core/guards/auth.guard';
import {LoginPageComponent} from './features/login/page/login-page.component';
import {loginGuard} from './core/guards/login.guard';
import {ProfilePageComponent} from './features/profile/page/profile-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate: [loginGuard] },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'auction/:noSale', component: AuctionPageComponent },
      { path: 'profile', component: ProfilePageComponent },
      { path: 'profile/:noUser', component: ProfilePageComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
];
