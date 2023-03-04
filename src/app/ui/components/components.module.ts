import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BasketsModule } from './baskets/baskets.module';
import { ProductModule } from './products/products.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    BasketsModule,
    ProductModule
  ],
})
export class ComponentsModule { }
