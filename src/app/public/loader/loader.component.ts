import { LoaderService } from '../loader.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  constructor( private activeLoader : LoaderService){}

  active$ =  this.activeLoader.active$;

}
