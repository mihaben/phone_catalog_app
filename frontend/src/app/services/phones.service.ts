import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PhonesService {

  BASE_ENDPOINT: string;
  BASE_PORT: number;

  constructor(private http: Http) {
    this.BASE_ENDPOINT = 'http://localhost';
    this.BASE_PORT = 3000;
  }

  getPhones(): Observable<any> {
    return this.http.get(`${this.BASE_ENDPOINT}:${this.BASE_PORT}/phones`).map( res => res.json());
  }

}
