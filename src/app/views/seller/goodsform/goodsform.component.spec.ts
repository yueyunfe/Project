import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsformComponent } from './goodsform.component';

describe('GoodsformComponent', () => {
  let component: GoodsformComponent;
  let fixture: ComponentFixture<GoodsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
