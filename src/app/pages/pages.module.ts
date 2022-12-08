import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    CatalogueComponent,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProductComponent,
    CatalogueComponent,
    PagesComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
  ]
})
export class PagesModule { }
