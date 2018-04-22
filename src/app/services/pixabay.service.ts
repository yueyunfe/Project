import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class PixabayService {


  key = '8767133-fed6cb6179e0f8b5f98ec655a';

  urlBase = 'https://pixabay.com/api/?key=';
  query: string;
  URL: string = this.urlBase + this.key + '&q=';
  perPage = '&per_page=50';

  constructor(private _http: Http) {
  }

  getImage(query) {
    return this._http.get(this.URL + query + this.perPage).map(res => res.json());
  }



}
