import {computed, inject, Injectable, signal} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ProfileView, User} from '../../../shared/models/user';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_URL = `${environment.apiUrl}/auth`;
  private readonly http: HttpClient = inject(HttpClient);

  private readonly _currentUser$ = signal<User | null>(null);
  currentUser$ = this._currentUser$.asReadonly();

  private readonly _currentProfile$ = signal<ProfileView | null>(null);
  currentProfile$ = this._currentProfile$.asReadonly();

  public isLoggedIn$ = computed(() => this.currentUser$() !== null);

  public login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/login`,
      {username, password},
      {withCredentials: true}
    ).pipe(
      tap(data => {
        console.log("Response /login: ", data);
        this._currentUser$.set(data);
      })
    )
  }

  public logout(): Observable<void> {
    return this.http.post<void>(`${this.BASE_URL}/logout`, {withCredentials: true}).pipe(
      tap(() => {
        this._currentUser$.set(null);
      })
    )
  }

  public loadProfile(): Observable<ProfileView> {
    return this.http.get<ProfileView>(`${this.BASE_URL}/me`, {withCredentials: true}).pipe(
      tap(data => {
        console.log("Response /profile: ", data);
        this._currentProfile$.set(data);
      })
    );
  }

  revokeToken() {
    // TODO : refresh token
  }
}
