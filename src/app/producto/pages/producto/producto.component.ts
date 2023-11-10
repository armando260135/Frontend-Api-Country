import { Component, OnInit,ElementRef } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ProductoInterface } from './../../../interface/producto-interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  modalActualizar: HTMLElement | null = null;
  modalEliminar: HTMLElement | null = null;
  toast: HTMLElement | null = null;
  modalMessage: string = '';
  titleModalMessage: String = '';

  constructor(private service: ServiceService, private el: ElementRef) { }

  elementos: ProductoInterface[] = [];

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (res: any) => {
        this.elementos = res;
      },
      (ERR: any) => {
        console.log("error");
      },
      () => {
        console.log("finis");
      }
    );

  this.modalActualizar = this.el.nativeElement.querySelector('#myModalActualizar');
  this.modalEliminar = this.el.nativeElement.querySelector('#myModalEliminar');
  }

  openModal(action: string): void {
    // Asegúrate de que el elemento del modal no sea nulo
    if (this.modalActualizar && this.modalEliminar) {
      // Abre la ventana modal y muestra la información del producto
      
      if (action === 'update') {
        this.titleModalMessage = 'Cuentanos que quieres actualizar ';
        this.modalMessage = '¿Deseas actualizar?';
        this.modalActualizar.style.display = 'block';
        this.modalEliminar.style.display = 'none';
      } else if (action === 'delete') {
        this.titleModalMessage = 'Estas seguro de Eliminar este pais?';
        this.modalMessage = 'Una vez eliminado, ya no podras visualizarlo nuevamente.';
        this.modalActualizar.style.display = 'none';
        this.modalEliminar.style.display = 'block';
      }
    }
  }

  closeModal(): void {
    // Cierra la ventana modal
    if (this.modalActualizar && this.modalEliminar) {
      this.modalActualizar.style.display = 'none';
      this.modalEliminar.style.display = 'none';
    }
  }
  
  deleteCountry(): void {
    if (this.toast) {
      this.toast.style.display = 'block';
    }
  }
  
}
