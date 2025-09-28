import {Component, inject, OnInit} from '@angular/core';
import {SaleService} from '../../../service/sale/sale.service';
import {Sale} from '../../../models/sale';
import {ActivatedRoute} from '@angular/router';
import {asyncScheduler, distinctUntilChanged, Observable, map, switchMap, shareReplay} from 'rxjs';
import {AsyncPipe, NgOptimizedImage, SlicePipe} from '@angular/common';
import {UserLayoutComponent} from '../../shared/user-layout.component/user-layout.component';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-auction',
  imports: [
    AsyncPipe,
    NgOptimizedImage,
    UserLayoutComponent,
    SlicePipe
  ],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.css'
})
export class AuctionComponent implements OnInit {
  private readonly saleService: SaleService = inject(SaleService);
  private readonly route = inject(ActivatedRoute);

  protected data$!: Observable<Sale>;
  ngOnInit() {
    this.data$ = this.route.params.pipe(
      map(params => Number(params['noVente'])), // récupère l’ID
      distinctUntilChanged(),                  // évite de relancer si identique
      switchMap(noVente => this.saleService.getSale(noVente)),
      shareReplay(1)                            // mémorise la dernière valeur pour tous les abonnés
    );
  }


  protected readonly async = asyncScheduler;
}
