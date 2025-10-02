import {Component, Input} from '@angular/core';
import {User, UserProfile} from '../../../models/user';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user-layout',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {
  @Input() user!: UserProfile;
  @Input() size: number = 20
}
