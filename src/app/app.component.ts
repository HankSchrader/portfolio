import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERIK MIKAC';
  public toggle(isViewable): void { isViewable = !isViewable; }
}
