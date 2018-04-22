import {Component, OnInit} from '@angular/core';
import {FlickrService} from '../../services/flickr.service';
import {Router} from '@angular/router';

@Component({
  selector: 'flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  searchText: String = '';
  photos: any[] = [{photo: ''}];

  constructor(private flickrService: FlickrService, private router: Router) {
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          console.log(data);
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          console.log(val);
          this.photos = val.photos;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    localStorage.setItem('pic', url);
    this.router.navigate(['/seller/goods/new']);
  }



  //
  //
  // this.widgetService
  //   .updateWidget(this.widgetId, this.widget)
  //   .subscribe(
  //     (data: any) => {
  //       const result = data;
  //       if (result) {
  //         this.router.navigate(['/user/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId]);
  //       } else {
  //         this.error = 'failed!';
  //       }
  //     }
  //   );



  ngOnInit() {
  }


}
