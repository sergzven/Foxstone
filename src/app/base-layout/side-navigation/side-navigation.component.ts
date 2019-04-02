import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class SideNavigationComponent implements OnInit {

  public compact = false;
  public menuOpen = false;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth  < 992) this.compact = true;
  }

  onResize(event) {
    if (event.target.innerWidth < 992) this.compact = true;
    else this.compact = false;
  }

  public onMenuOpen() {
    this.menuOpen = !this.menuOpen;
  }

}
