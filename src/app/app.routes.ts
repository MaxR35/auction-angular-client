import { Routes } from '@angular/router';
import {AppLayoutComponent} from './components/layouts/app-layout.component/app-layout.component';
import {HomeComponent} from './components/home/home.component/home.component';
import {AuctionComponent} from './components/auction/auction.component/auction.component';
import {authGuard} from './security/auth-guard/auth-guard';
import {LoginComponent} from './components/login/login.component';
import {loginGuard} from './security/login-guard/login-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'auction/:noVente', component: AuctionComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
];
