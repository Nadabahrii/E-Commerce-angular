import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from "@angular/forms";
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';
import { ProductItemComponent } from './product-item/product-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OffresEmploiComponentComponent,
    ArticlesComponentComponent,
    NavbarComponent,
    NotfoundComponent,
    DetailproductComponent,
    AddproductComponent,
    TemplateDrivenFormComponentComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
