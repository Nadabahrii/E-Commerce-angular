import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {OffresEmploiComponentComponent} from "./offres-emploi-component/offres-emploi-component.component";
import {ArticlesComponentComponent} from "./articles-component/articles-component.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {DetailproductComponent} from "./detailproduct/detailproduct.component";
import {AddproductComponent} from "./addproduct/addproduct.component";
import {
  TemplateDrivenFormComponentComponent
} from "./template-driven-form-component/template-driven-form-component.component";

const routes: Routes = [

  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'detailproduct/:id', component:DetailproductComponent},
  {path:'offres', component:OffresEmploiComponentComponent},
  {path:'artticles', component:ArticlesComponentComponent},
  {path:'TDFC', component:TemplateDrivenFormComponentComponent},
  {path:'addproduct', component:AddproductComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
