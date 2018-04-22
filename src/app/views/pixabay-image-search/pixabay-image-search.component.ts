import {Component, OnInit} from '@angular/core';
import {PixabayService} from '../../services/pixabay.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pixabay-image-search',
  templateUrl: './pixabay-image-search.component.html',
  styleUrls: ['./pixabay-image-search.component.css']
})
export class PixabayImageSearchComponent implements OnInit {

  images: any[];
  searchText: String = '';

  constructor(private pixabayService: PixabayService, private router: Router) {
  }

  ngOnInit() {
  }

  searchImage(query: string) {
    return this.pixabayService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => console.log(error),
      () => console.log('complete')
    );
  }

  selectPhoto(photo) {
    const url = photo.webformatURL;
    localStorage.setItem('pic', url);
    this.router.navigate(['/seller/goods/new']);
  }

  private handleSuccess(data: any) {
    this.images = data.hits;
    console.log(data.hits);
  }
}
