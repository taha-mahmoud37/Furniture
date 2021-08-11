import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path : 'home' , component : HomeComponent},
  {path : 'blog' , component : BlogComponent},
  {path : 'contact' , component : ContactComponent},
  {path: 'pages' , loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)},
  {path: 'shop' , loadChildren: () => import('./shops/shops.module').then(mod => mod.ShopsModule)},
  {path: 'portfolio' , loadChildren: () => import('./portfolio/portfolio.module').then(mod => mod.PortfolioModule)},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
