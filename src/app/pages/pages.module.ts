import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';
import { ClientsComponent } from './clients/clients.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AboutComponent,
    TeamComponent,
    PricingComponent,
    ClientsComponent,
    GiftcardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CarouselModule
  ]
})
export class PagesModule {
  constructor(){
    console.log("dfhgnhf")
    
  }
 }
