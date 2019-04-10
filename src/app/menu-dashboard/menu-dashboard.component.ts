import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Book} from '../Book';
import {BOOKS} from '../books-I-wrote';

@Component({
  selector: 'app-menu-dashboard',
  templateUrl: './menu-dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./menu-dashboard.component.css']
})
export class MenuDashboardComponent implements OnInit {
  books = BOOKS;
  constructor() { }

  ngOnInit() {
  }

}
