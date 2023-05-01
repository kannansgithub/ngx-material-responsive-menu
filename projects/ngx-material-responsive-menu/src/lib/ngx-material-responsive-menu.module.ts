import { NgModule } from '@angular/core';
import { NgxMenubarComponent } from './ngx-menubar/ngx-menubar.component';
import { SideNavbarItemComponent } from './ngx-menubar/side-navbar/side-navbar-item/side-navbar-item.component';
import { SideNavbarComponent } from './ngx-menubar/side-navbar/side-navbar.component';
import { TopNavbarItemComponent } from './ngx-menubar/top-navbar/top-navbar-item/top-navbar-item.component';
import { TopNavbarComponent } from './ngx-menubar/top-navbar/top-navbar.component';
import { MatModule } from './ngx-menubar/mat.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NgxMenubarComponent,
    SideNavbarItemComponent,
    SideNavbarComponent,
    TopNavbarComponent,
    TopNavbarItemComponent,
    SideNavbarComponent,
    TopNavbarComponent,
  ],
  imports: [BrowserModule, MatModule, RouterModule],
  exports: [NgxMenubarComponent],
})
export class NgxMaterialResponsiveMenuModule {}
