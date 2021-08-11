import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CascadingComponent } from './cascading/cascading.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path : '' , component: GalleryComponent},
  {path : 'gallery' , component: GalleryComponent},
  {path : 'cascading' , component: CascadingComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
