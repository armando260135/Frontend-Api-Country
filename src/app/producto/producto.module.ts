import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { ListaComponent } from './components/lista/lista.component';
import { CrearComponent } from './components/crear/crear.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';

@NgModule({
  declarations: [
    ProductoComponent,
    ListaComponent,
    CrearComponent,
    ActualizarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    NgOptimizedImage
  ]
})
export class ProductoModule { }
