import {Component, Input} from '@angular/core';
import {ProfileView} from '../../models/user';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-user-layout',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './user-badge.component.html',
  styleUrl: './user-badge.component.css'
})
export class UserBadgeComponent {
  @Input() user!: ProfileView;
  @Input() size: number = 20;
  @Input() info: string | null = null;
  @Input() showInfo: boolean = false;
}
