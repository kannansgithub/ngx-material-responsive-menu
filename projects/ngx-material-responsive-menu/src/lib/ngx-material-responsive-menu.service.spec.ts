import { TestBed } from '@angular/core/testing';

import { NgxMaterialResponsiveMenuService } from './ngx-material-responsive-menu.service';

describe('NgxMaterialResponsiveMenuService', () => {
  let service: NgxMaterialResponsiveMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMaterialResponsiveMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
