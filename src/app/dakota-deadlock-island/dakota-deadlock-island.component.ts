import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dakota-deadlock-island',
  templateUrl: './dakota-deadlock-island.component.html',
  styleUrls: ['./dakota-deadlock-island.component.scss'],
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
export class DakotaDeadlockIslandComponent implements OnInit {
  isOpen = true;

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }




}
