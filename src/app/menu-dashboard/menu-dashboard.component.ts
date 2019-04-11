import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Book} from '../Book';
import {BOOKS} from '../books-I-wrote';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-menu-dashboard',
  templateUrl: './menu-dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./menu-dashboard.component.css'],
  animations: [

    trigger('fadeInOutFirst', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000))
    ]),
    trigger('fadeInOutSecond', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1500))
    ]),
    trigger('fadeInOutThird', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(2000))
    ])
  ]
})
export class MenuDashboardComponent implements OnInit {
  books = BOOKS;
  constructor() { }

  ngOnInit() {
  }

}
