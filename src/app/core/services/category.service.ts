import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../shared/models/category';
import {Observable, tap} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly BASE_URL = `${environment.apiUrl}/categories`;
  private readonly http: HttpClient = inject(HttpClient);

  private readonly _categories$ = signal<Category[]>([]);
  categories$ = this._categories$.asReadonly();

  private readonly _selectedCategory$ = signal<Category | null>(null);
  selectedCategory$ = this._selectedCategory$.asReadonly();

  selectCategory(cat: Category | null) {
    this._selectedCategory$.set(cat);
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.BASE_URL, {withCredentials: true}).pipe(
      tap(data => {
        console.log('Response /categories: ', data);
        this._categories$.set(data);
      })
    );
  }
}
