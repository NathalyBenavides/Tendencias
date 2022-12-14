import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';

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
 
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '**', component: NopagesfoundComponent},
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
