import {inject, Injectable, signal} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ProfileView} from '../../shared/models/user';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BASE_URL = `${environment.apiUrl}/users/`;
  private readonly http: HttpClient = inject(HttpClient);

  public _profile$ = signal<ProfileView | null>(null);
  profile$ = this._profile$.asReadonly();

  public getProfile(id: number): Observable<ProfileView> {
    return this.http.get<ProfileView>(this.BASE_URL + id , {withCredentials: true}).pipe(
      tap((data) => {
        console.log("Response /user: ", data);
        this._profile$.set(data);
      })
    )
  }
}
