import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../Book';

@Component({
  selector: 'app-eyes-of-the-dragon',
  templateUrl: './eyes-of-the-dragon.component.html',
  styleUrls: ['./eyes-of-the-dragon.component.scss']
})
export class EyesOfTheDragonComponent implements OnInit {

  @Input()
  book: Book;
  constructor() { }

  ngOnInit() {
  }

}
