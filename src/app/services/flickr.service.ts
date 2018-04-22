import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class FlickrService {

  key = 'f17aa63a10c22b0650c1c81dba39a8fb';
  secret = 'c2c612f123299396';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private _http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this._http.get(url);
  }

}
