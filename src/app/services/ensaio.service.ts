import { EnsaioView } from './../class/ensaio-view';
import { SERVER_URL } from './../util/config';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnsaioService {

  constructor(private http: Http) { }

  getEnsaio(id:string): Observable<EnsaioView> {
    console.log(`${SERVER_URL}/ensaio/view/${id}`);
    let options = new RequestOptions();
    options.headers = new Headers({'Content-Type': 'application/json'})
    return this.http.get(`${SERVER_URL}/ensaio/view/${id}`, options).map((response: Response) => <EnsaioView>response.json())
  }
}
