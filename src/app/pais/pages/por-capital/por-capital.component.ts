import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  hayError: boolean = false;
  termino: string = '';
  capitales: Country[] = [];

  constructor(private PaisService: PaisService) { }


  buscar (termino: string){
    this.hayError = false;
    this.termino = termino;

    this.PaisService.buscarCapital(this.termino)
        .subscribe( (capitales) => {
          this.capitales = capitales
          // console.log(paises)
        }, (err) => {
          this.hayError = true;
          this.capitales   = [];
        })
  }
}
