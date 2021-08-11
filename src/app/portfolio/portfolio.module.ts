import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { StandardComponent } from './standard/standard.component';
import { MasonryComponent } from './masonry/masonry.component';


@NgModule({
  declarations: [
    StandardComponent,
    MasonryComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
