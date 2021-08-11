import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { CascadingComponent } from './cascading/cascading.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    GalleryComponent,
    CascadingComponent
  ],
  imports: [
    CommonModule,
    ShopsRoutingModule,
    NzIconModule
  ]
})
export class ShopsModule { }
