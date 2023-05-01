import { Component, Input } from '@angular/core';
import { INavItem } from './models/INavItem';

@Component({
  selector: 'lib-ngx-menubar',
  templateUrl: './ngx-menubar.component.html',
  styleUrls: ['./ngx-menubar.component.css'],
})
export class NgxMenubarComponent {
  @Input() navBarMenuItems: ReadonlyArray<INavItem> = [];
  @Input() menuBarColor: string = '';

  isSidebarActive: boolean = false;
  onSidebarToggle() {
    this.isSidebarActive = !this.isSidebarActive;
  }
}
