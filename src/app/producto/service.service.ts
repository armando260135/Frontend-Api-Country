import { ProductoInterface } from './../interface/producto-interface';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) {}
  
  baseUrl = "https://restcountries.com/v3.1/";
  all = "/all"
  one = ""
 
  getAll() : Observable<any>{
    return this.http.get(this.baseUrl+this.all)
  }

  getOne(id : string){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  postProducto(){

  }

  putProducto(){

  }

  deleteProducto(){

  }


}
