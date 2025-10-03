import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {hugeSpotify, hugeInstagram, hugeTwitter} from '@ng-icons/huge-icons';
import {MiniCardComponent} from '../components/mini-card/mini-card.component';
import {AuthService} from '../../../core/services/security/auth.service';
import {UserService} from '../../../core/services/user.service';
import {BreadcrumbComponent} from '../../../shared/components/breadcrumb/breadcrumb.component';
import {NgPipesModule} from 'ngx-pipes';
import {SlugifyPipe} from '../../../core/pipes/slugify.pipe';

@Component({
  selector: 'app-profile',
  imports: [
    NgOptimizedImage,
    NgIcon,
    MiniCardComponent,
    BreadcrumbComponent,
    NgPipesModule,
    SlugifyPipe
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
  viewProviders: [provideIcons({hugeSpotify, hugeInstagram, hugeTwitter})]
})
export class ProfilePageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly authService = inject(AuthService);
  private readonly userService = inject(UserService);

  private id: number | null = null;
  protected update = false;

  protected profile$ = computed(() => {
    const currentProfile = this.authService.currentProfile$();
    const otherProfile = this.userService.profile$();

    if (!this.id || this.id === currentProfile?.userId) {
      return currentProfile;
    }
    return otherProfile;
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['noUser'] ? +params['noUser'] : null;

      if (!this.id || this.id === this.authService.currentProfile$()?.userId) {
        this.update = true;
        this.authService.loadProfile().subscribe();
      } else {
        this.update = false;
        this.userService.getProfile(this.id).subscribe();
      }
    });

    console.log("Profil loaded: ", this.profile$());
  }
}

