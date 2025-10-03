import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sale} from '../../shared/models/sale';
import {CategoryService} from './category.service';
import {Observable, tap} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private readonly BASE_URL = `${environment.apiUrl}/sales`;
  private readonly http: HttpClient = inject(HttpClient);
  private readonly categoryService: CategoryService = inject(CategoryService);

  private readonly _sales$ = signal<Sale[]>([]);
  sales$ = computed(() => {
    let selectedCategory = this.categoryService.selectedCategory$();

    return selectedCategory
      ? this._sales$().filter(s => s.item.category.categoryId === selectedCategory.categoryId)
      : this._sales$();
  })

  private readonly _sale$ = signal<Sale | null>(null);
  sale$ = this._sale$.asReadonly()

  public getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.BASE_URL, {withCredentials: true}).pipe(
      tap(data => {
        console.log("Response /sales: ", data);
        this._sales$.set(data);
      })
    );
  }

  public getSaleById(id: number): Observable<Sale> {
    return this.http.get<Sale>(`${this.BASE_URL}/${id}`, {withCredentials: true}).pipe(
      tap(data => {
        console.log("Response /sales: ", data);
        this._sale$.set(data);
      })
    );
  }
}
