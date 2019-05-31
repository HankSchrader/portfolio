import {Component, Input, ViewEncapsulation} from '@angular/core';
import {TOP_FIVE_BOOKS} from './top-five-books';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERIK MIKAC';
  public link: boolean;
  getEvent(event: boolean) {
    this.link = event;
  }
}
