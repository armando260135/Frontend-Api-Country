import { ProductoModule } from './producto/producto.module';
import { HomeModule } from './home/home.module';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { authGuard } from './guards/auth.guard';
 


const roters : Routes  =[  
  { path : '' , loadChildren : ()=>{return import("./home/home.module").then(m => m.HomeModule)}},
  { path : 'producto' , canActivate: [authGuard],  loadChildren : ()=>{return import("./producto/producto.module").then(m => m.ProductoModule)}},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(roters), 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
