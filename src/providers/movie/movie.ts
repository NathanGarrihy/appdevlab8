import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getFilmInfo():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?apikey=e9dff2db&s=%27war%27');
  }

}
