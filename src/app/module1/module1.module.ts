import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
///////////////////// Servicios ////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

///////////////////////Componentes//////////////////////////////////////
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';





@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ProductDetailComponent,
    AddProductComponent,
    ProductListComponent,
    
  ],
  providers: [
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [FooterComponent,HeaderComponent]
})
export class Module1Module { }
