import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  ViewChild
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AppComponent} from '../../app.component';
import {MenuDashboardComponent} from '../../header/menu-dashboard/menu-dashboard.component';
import {AnchorService} from '../../anchor.service';

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
  isOpen = true;
  @Input() divTarget: HTMLElement;
  currentClickStatus = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private anchor: AnchorService
  ) {


  }

  ngAfterViewInit() {
    // if (this.anchor.link) {
    //   this.anchor.link.subscribe(event => {
    //     this.currentClickStatus = event;
    //     console.log(this.currentClickStatus);
    //     document.getElementById('dakota').scrollIntoView({behavior: 'smooth', inline: 'center'});
    //   });
    // }
  }
  ngOnInit() {
    {
      this.activatedRoute.fragment.subscribe(f => {

        if (element) { document.querySelector('#dakota').scrollIntoView(); }
      });
    }

  }

  // ngAfterViewChecked() {
  //   if (this.currentClickStatus === true) {
  //     document.getElementById(this.activatedRoute.snapshot.data.tag).scrollIntoView({behavior: 'smooth', inline: 'center'});
  //
  //   }
  // }
}

