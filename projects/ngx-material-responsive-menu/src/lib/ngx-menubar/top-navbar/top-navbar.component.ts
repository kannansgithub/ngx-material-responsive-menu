import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INavItem } from '../models/INavItem';

@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css'],
})
export class TopNavbarComponent implements OnInit {
  @Input() navItems: ReadonlyArray<INavItem> = [];
  @Output() onSidebarToggle = new EventEmitter();
  @Input() IsSidebarActive: boolean = false;
  @Input() menuBarColor: string = '';
  constructor() {}
  ngOnInit(): void {}
  onTtoggleSidenav() {
    this.onSidebarToggle.emit();
  }
}
