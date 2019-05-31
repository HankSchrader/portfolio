import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bayou-bad-news',
  templateUrl: './bayou-bad-news.component.html',
  styleUrls: ['./bayou-bad-news.component.scss'],
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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    if (this.activatedRoute.snapshot.data.tag) {
      console.log(this.activatedRoute.snapshot.data.tag);
      document.getElementById(this.activatedRoute.snapshot.data.tag).scrollIntoView({behavior: 'smooth'});
    }
  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.data.tag);
    if (this.activatedRoute.snapshot.data.tag) {
      console.log(this.activatedRoute.snapshot.data.tag);
      document.getElementById(this.activatedRoute.snapshot.data.tag).scrollIntoView({behavior: 'smooth'});
    }
  }

}
