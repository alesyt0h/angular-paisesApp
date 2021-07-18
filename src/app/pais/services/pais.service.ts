import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})


export class PaisService {

  private baseUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams () {
    return new HttpParams().set('fields','name;capital;flag;alpha2Code;population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
                    // RxJS method to catch error
                    // .pipe(
                    //   catchError(err => of(['Ha habido un error']))
                    // )
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${termino}`;
    
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
              //  .pipe(tap(console.log));
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.baseUrl}/alpha/${id}`;
    
    return this.http.get<Country>(url);
  }

}
