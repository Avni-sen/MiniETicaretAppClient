import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

//html içerisinde linkendirme routing işlemi yapacaksak sayfayı tanımladığımız ana componentmodule 
//içerisinde RoterModule tanımlaması yapmalıyız yoksa linklerimiz p etiketi ile yazılmış gibi duruyor.


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
