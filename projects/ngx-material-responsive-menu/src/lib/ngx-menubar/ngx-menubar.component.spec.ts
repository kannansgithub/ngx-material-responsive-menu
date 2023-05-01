import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMenubarComponent } from './ngx-menubar.component';

describe('NgxMenubarComponent', () => {
  let component: NgxMenubarComponent;
  let fixture: ComponentFixture<NgxMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMenubarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
