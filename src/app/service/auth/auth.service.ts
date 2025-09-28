import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of, tap} from 'rxjs';
import {User} from '../../models/user'


const API_URL = 'http://localhost:8080/api/auth';

@Injectable({providedIn: 'root'})
export class AuthService {
  private http: HttpClient = inject(HttpClient);
  private _currentUser = signal<User | null>(null);
  currentUser = this._currentUser.asReadonly();
  isLoggedIn = computed(() => this.currentUser() !== null);

  login(username: string, password: string): Observable<{ user: User }> {
    return this.http.post<{ user: User }>(`${API_URL}/login`,
      {username, password},
      {withCredentials: true}
    ).pipe(
      tap(response => {
        this._currentUser.set(response.user);
        return this.loadProfile();
      }),
      tap(user => console.log("Logged User :", user))
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${API_URL}/logout`,
      {}, {withCredentials: true}
    ).pipe(
      tap(() => {
        this._currentUser.set(null);
      })
    )
  }

  revokeToken(): Observable<any> {
    return this.http.post<any>(`${API_URL}/revoke`,
      {}, {withCredentials: true}
    ).pipe(
      tap(response => {
        // Les nouveaux tokens sont automatiquement stockés dans des cookies HTTP-only
        console.log('Tokens refreshed successfully');
      })
    );
  }

  loadProfile(): Observable<User | null> {
    const user = this._currentUser();
    if (user?.profile) {
      return of(user); // déjà complet
    }

    return this.http.get<User>(`${API_URL}/me`, { withCredentials: true }).pipe(
      tap(fullUser => this._currentUser.set(fullUser)),
      catchError(() => {
        this._currentUser.set(null);
        return of(null);
      })
    );
  }
}
