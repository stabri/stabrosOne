import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyaboutComponent } from './companyabout.component';

describe('CompanyaboutComponent', () => {
  let component: CompanyaboutComponent;
  let fixture: ComponentFixture<CompanyaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
