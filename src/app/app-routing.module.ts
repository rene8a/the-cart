import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherComponent } from './other/other.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './layouts/search/search.component';
import { ProductDetailComponent } from './layouts/product-detail/product-detail.component';
import { ProductItemsComponent } from './shared/product/product-items/product-items.component';
import { BasicComponent } from './layouts/basic/basic.component';
import { PaymentDetailComponent } from './shared/payment-detail/payment-detail.component';
import { RegisterComponent } from './shared/register/register.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: SearchComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/dashboard/test' },
      { path: 'test', component: ProductItemsComponent },
      { path: 'other', component: OtherComponent },
    ],
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent
  },
  {
    path: 'other',
    component: OtherComponent,
  },
  { path: 'payments', loadChildren: () => import('./payment/payment/payment.module').then(m => m.PaymentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
