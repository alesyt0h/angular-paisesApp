import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  paises: Country[] = [];


  constructor(private PaisService: PaisService) { }

  getClaseCSS(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary m-2' : 'btn btn-outline-primary m-2'
  }

  activarRegion(region: string){
    if (region === this.regionActiva) return;

    this.regionActiva = region;
    this.paises = [];

    this.PaisService.buscarRegion(region)
        .subscribe( (paises) => {
          this.paises = paises
        })
  }

}
