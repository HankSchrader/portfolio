import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-bayou-bad-news',
  templateUrl: './bayou-bad-news.component.html',
  styleUrls: ['./bayou-bad-news.component.css'],
  animations: [

    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
    trigger('fadeInOutPost', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate('1000ms 750ms')),
    ])
  ]
})
export class BayouBadNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
