import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './products.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: ProductComponent }
    ])
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
