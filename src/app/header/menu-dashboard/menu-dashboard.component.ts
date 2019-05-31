import {Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Book} from '../../Book';
import {BOOKS} from '../../books-I-wrote';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DakotaDeadlockIslandComponent} from '../../my-books/dakota-deadlock-island/dakota-deadlock-island.component';
import {AnchorService} from '../../anchor.service';
import {of, Subject} from 'rxjs';
import {Route, Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-menu-dashboard',
  templateUrl: './menu-dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./menu-dashboard.component.scss'],
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
export class MenuDashboardComponent implements OnInit, OnChanges {
  books = BOOKS;
  private anchor: AnchorService;
  private router: Router;
  isClicked = false;
  constructor(anchor: AnchorService, router: RouterModule) {
    this.anchor = anchor;

  }

  ngOnInit() {
  }
  ngOnChanges() {
  }



}
