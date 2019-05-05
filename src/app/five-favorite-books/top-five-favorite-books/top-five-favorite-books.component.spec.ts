import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFiveFavoriteBooksComponent } from './top-five-favorite-books.component';

describe('TopFiveFavoriteBooksComponent', () => {
  let component: TopFiveFavoriteBooksComponent;
  let fixture: ComponentFixture<TopFiveFavoriteBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFiveFavoriteBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFiveFavoriteBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
