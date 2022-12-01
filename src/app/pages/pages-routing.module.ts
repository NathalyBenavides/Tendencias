import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';

const routes:Routes = [
  {
    path: '',
     component:PagesComponent,
    children: [
      {path:'dashboard', component: DashboardComponent},
      {path: 'product', component: ProductComponent},
      {path: 'catalogue', component: CatalogueComponent},
      {path: '', redirectTo: '/dashboard', pathMatch:'full'},
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
