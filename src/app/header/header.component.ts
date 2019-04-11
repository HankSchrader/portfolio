import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Input is used to pass a variable from the parent component to the child component.
  @Input() title;
  public isViewable: boolean;
  constructor() { }

  ngOnInit() {this.isViewable = true; }


}
