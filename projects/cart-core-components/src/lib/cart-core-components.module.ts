import { NgModule } from '@angular/core';
import { CartCoreComponentsComponent } from './cart-core-components.component';
import { LogoComponent } from './logo/logo.component';
import { ResizableContainerComponent } from './resizable-container/resizable-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    CartCoreComponentsComponent,
    LogoComponent,
    ResizableContainerComponent,
    ProductDetailComponent,
  ],

  imports: [FormsModule, ReactiveFormsModule],
  exports: [
    CartCoreComponentsComponent,
    LogoComponent,
    ResizableContainerComponent,
  ],
})
export class CartCoreComponentsModule {}
