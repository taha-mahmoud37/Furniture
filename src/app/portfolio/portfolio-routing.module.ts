import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasonryComponent } from './masonry/masonry.component';
import { StandardComponent } from './standard/standard.component';

const routes: Routes = [
  {path : '' , component : StandardComponent},
  {path : 'standard' , component : StandardComponent},
  {path : 'masonry' , component : MasonryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
