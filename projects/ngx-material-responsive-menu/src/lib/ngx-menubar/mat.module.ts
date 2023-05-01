import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  exports: [
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
})
export class MatModule {}
