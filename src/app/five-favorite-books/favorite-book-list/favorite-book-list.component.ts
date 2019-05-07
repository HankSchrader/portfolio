import { Component, OnInit } from '@angular/core';
import {TOP_FIVE_BOOKS} from '../../top-five-books';

@Component({
  selector: 'app-favorite-book-list',
  templateUrl: './favorite-book-list.component.html',
  styleUrls: ['./favorite-book-list.component.scss']
})
export class FavoriteBookListComponent implements OnInit {
  topFive = TOP_FIVE_BOOKS;
  constructor() { }

  ngOnInit() {
  }

}
