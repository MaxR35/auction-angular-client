import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sale} from '../../models/sale';
import {Observable, shareReplay, tap} from 'rxjs';
import {Category} from '../../models/category';

const API_URL = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private readonly http: HttpClient = inject(HttpClient);


  public sales$ = signal<Sale[]>([])
  public categories$ = signal<Category[]>([])
  public selectedCategory$ = signal<Category | null>(null)


  public filteredSales$ = computed(() => {
    const cat = this.selectedCategory$();

    console.log(cat)

    return cat
      ? this.sales$().filter(s => s.item.category.categoryId === cat.categoryId)
      : this.sales$();
  });

  selectCategory(cat: Category | null) {
    this.selectedCategory$.set(cat);
  }

  // Read All
  public getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${API_URL}/sales` , {withCredentials: true}).pipe(
      tap(sales => {
        console.log('Response /sales :', sales);
        this.sales$.set(sales);
      })
    );
  }

  // Read By Id
  public getSale(noVente: number): Observable<Sale> {
    return this.http.get<Sale>(`${API_URL}/sales/${noVente}`, { withCredentials: true }).pipe(
      tap(sale => console.log(`Response /sales/${noVente}:`, sale)),
      shareReplay(1) // ← mémorise la dernière valeur pour tous les abonnés
    );
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${API_URL}/categories` , {withCredentials: true}).pipe(
      tap(categories => {
        console.log('Response /categories :', categories);
        this.categories$.set(categories);
      })
    );
  }
}
