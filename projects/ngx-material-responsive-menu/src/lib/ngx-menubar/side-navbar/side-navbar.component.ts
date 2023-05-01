import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INavItem } from '../models/INavItem';

@Component({
  selector: 'side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
})
export class SideNavbarComponent {
  @Input() navItems: ReadonlyArray<INavItem> = [];
  @Input() IsSidebarActive: boolean = false;
  @Output() onSidebarToggle = new EventEmitter();

  onTtoggleSidenav() {
    this.onSidebarToggle.emit();
  }
}
