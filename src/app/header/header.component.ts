import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [

    trigger('fadeInOutFirst', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(3000))
    ]),
    trigger('fadeInOutSecond', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(5000))
    ]),
    trigger('fadeInOutThird', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(2000))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  // @Input is used to pass a variable from the parent component to the child component.
  @Input() title;
  public isViewable: boolean;
  constructor() { }
  ngOnInit() {this.isViewable = true; }


}
