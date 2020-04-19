import { Pais } from './../models/pais.model';
import { Mundo } from './../models/mundo.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidapiService {

  url = 'https://corona.lmao.ninja/v2'

  constructor(private http: HttpClient) { }

  async getInfoMundo() {
    return await this.http.get<Mundo>(`${this.url}/all`)
    .toPromise()
    .then(mundo => {return mundo});
  }

  getInfoPais(pais: string = 'brazil') {
    return this.http.get<Pais>(`${this.url}/countries/${pais}`)
    .toPromise()
    .then(pais => {return pais})
  }

}
