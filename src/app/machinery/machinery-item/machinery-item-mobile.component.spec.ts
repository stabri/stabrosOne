import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryItemMobileComponent } from './machinery-item-mobile.component';

describe('MachineryItemMobileComponent', () => {
  let component: MachineryItemMobileComponent;
  let fixture: ComponentFixture<MachineryItemMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryItemMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryItemMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
