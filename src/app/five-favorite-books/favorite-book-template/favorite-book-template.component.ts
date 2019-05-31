import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../Book';

@Component({
  selector: 'app-favorite-book-template',
  templateUrl: './favorite-books-template.component.html',
  styleUrls: ['./favorite-book-template.component.scss']
})
export class FavoriteBookTemplateComponent implements OnInit {

  @Input()
  book: Book;
  constructor() { }

  ngOnInit() {
  }

}
