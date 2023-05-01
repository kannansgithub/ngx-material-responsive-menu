import { Component, Input, ViewChild } from '@angular/core';
import { INavItem } from '../../models/INavItem';

@Component({
  selector: 'top-navbar-item',
  templateUrl: './top-navbar-item.component.html',
  styleUrls: ['./top-navbar-item.component.css'],
})
export class TopNavbarItemComponent {
  @Input() items?: INavItem[];
  @ViewChild('childMenu') public childMenu: any;
}
