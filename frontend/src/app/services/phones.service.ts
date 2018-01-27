import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PhonesService {

  BASE_ENDPOINT: string;

  constructor(private http: Http) {
    this.BASE_ENDPOINT = 'https://jsonplaceholder.typicode.com';
  }

  getPhones(): Observable<any> {
    return this.http.get(`${this.BASE_ENDPOINT}/posts`).map( res => res.json());
  }

}
