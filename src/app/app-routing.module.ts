import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShippingCompanyFormComponent } from './shipping-company/shipping-company-form/shipping-company-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: HomeComponent,
    data: {buttonStatus: 'home'}
  },
  {
    path: 'shippingCompanyForm',
    component: ShippingCompanyFormComponent,
    data: {buttonStatus: 'form'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
