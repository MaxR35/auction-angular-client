import { Component } from '@angular/core';
import {HeaderComponent} from '../header.component/header.component';
import {MainComponent} from '../main.component/main.component';
import {NavbarComponent} from '../../layouts/navbar.component/navbar.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    MainComponent,
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
