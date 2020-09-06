import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dakota-deadlock-island',
  templateUrl: './dakota-deadlock-island.component.html',
  styleUrls: ['./dakota-deadlock-island.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class DakotaDeadlockIslandComponent implements OnInit, AfterViewInit{

  @Input() divTarget: HTMLElement;


  ngAfterViewInit() {

  }
  ngOnInit() {


  }

}

