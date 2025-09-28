import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sale} from '../../models/sale';
import {Observable, shareReplay, tap} from 'rxjs';

const API_URL = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private readonly http: HttpClient = inject(HttpClient);
  public sales$ = signal<Sale[]>([])

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
}
