import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SaleService} from '../../../core/services/sale.service';
import {NgOptimizedImage, SlicePipe} from '@angular/common';
import {LikeComponent} from '../../../shared/components/like.component/like.component';
import {UserBadgeComponent} from '../../../shared/components/user-layout.component/user-badge.component';
import {environment} from '../../../../environments/environment';
import {NgDatePipesModule, NgStringPipesModule} from 'ngx-pipes';
import {BidComponent} from '../components/bid/bid.component';
import {BreadcrumbComponent} from '../../../shared/components/breadcrumb/breadcrumb.component';
import {SlugifyPipe} from '../../../core/pipes/slugify.pipe';
import {CountdownComponent} from '../../../shared/components/countdown/countdown.component';
import {MoneyComponent} from '../../../shared/components/money-icon.component/money.component';
import {ButtonComponent} from '../../../shared/components/button.component/button.component';

@Component({
  selector: 'app-auction',
  imports: [
    NgOptimizedImage,
    LikeComponent,
    UserBadgeComponent,
    SlicePipe,
    NgDatePipesModule,
    BidComponent,
    BreadcrumbComponent,
    NgStringPipesModule,
    SlugifyPipe,
    CountdownComponent,
    MoneyComponent,
    ButtonComponent
  ],
  templateUrl: './auction-page.component.html',
  styleUrl: './auction-page.component.css'
})
export class AuctionPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly saleService: SaleService = inject(SaleService);

  protected sale$ = this.saleService.sale$

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.saleService.getSaleById(+params['noSale']).subscribe()
    })
  }

  protected readonly environment = environment;
  protected readonly length = length;
}
