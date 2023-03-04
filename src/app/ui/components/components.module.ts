import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BasketsComponent } from './baskets/baskets.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    HomeComponent,
    BasketsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
