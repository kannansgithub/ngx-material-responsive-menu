import { Component, Input } from '@angular/core';
import { INavItem } from '../../models/INavItem';

@Component({
  selector: 'side-navbar-item',
  templateUrl: './side-navbar-item.component.html',
  styleUrls: ['./side-navbar-item.component.css'],
})
export class SideNavbarItemComponent {
  @Input() items?: INavItem[];
}
