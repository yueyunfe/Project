import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixabayImageSearchComponent } from './pixabay-image-search.component';

describe('PixabayImageSearchComponent', () => {
  let component: PixabayImageSearchComponent;
  let fixture: ComponentFixture<PixabayImageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixabayImageSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixabayImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
