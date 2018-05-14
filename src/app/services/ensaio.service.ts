import { EnsaioView, Foto } from './../class/ensaio-view';
import { SERVER_URL } from './../util/config';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnsaioService {

  constructor(private http: Http) { }

  getEnsaio(id:string, pagina: number): Observable<EnsaioView> {
    console.log(`${SERVER_URL}/ensaio/view/${id}`);
    let options = new RequestOptions();
    options.headers = new Headers({'Content-Type': 'application/json'})
    return this.http.get(`${SERVER_URL}/ensaio/view/${id}/${pagina}`, options).map((response: Response) => <EnsaioView>response.json())
  }

  selecionaFoto(foto: Foto) {
    //foto.selecionado = foto.selecionado ? false : true;
    let seleciona = {_id: foto._id, selecionado: foto.selecionado ? false : true}

    let options = new RequestOptions();
    options.headers = new Headers({'Content-Type': 'application/json'})
    return this.http.put(`${SERVER_URL}/foto/seleciona`, seleciona , options).map((response: Response) => <{success:boolean, selecionado: boolean, totalSel: Number}>response.json());
  }
}
