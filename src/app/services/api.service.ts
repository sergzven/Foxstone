import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(
    private _http: HttpClient,
  ) {
    console.log('ApiService');
  }

  // headers: Headers = new Headers({
  //   'Content-Type': 'application/json',
  //   Accept: 'application/json'
  // });
  api_url = 'http://private-1b3550-phpbackend.apiary-mock.com';

  getOfferings(): Observable<any> {
    return this._http.get(this.api_url + '/offerings').pipe(
      tap((res: any) => res));
  }
}
