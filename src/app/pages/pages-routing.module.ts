import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path : '' , component: AboutComponent},
  {path : 'team' , component: TeamComponent},
  {path: 'pricing' , component : PricingComponent},
  {path : 'client' , component : ClientsComponent},
  {path : 'gift' , component : GiftcardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { 
  
}
