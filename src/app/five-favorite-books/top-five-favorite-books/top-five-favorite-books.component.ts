import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../Book';

@Component({
  selector: 'app-top-five-favorite-books',
  templateUrl: './top-five-favorite-books.component.html',
  styleUrls: ['./top-five-favorite-books.component.scss']
})
export class TopFiveFavoriteBooksComponent implements OnInit {

  @Input()
  book: Book;
  constructor() { }

  ngOnInit() {
  }

}
