import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavProductsComponent } from './sidenav-products.component';

describe('SidenavProductsComponent', () => {
  let component: SidenavProductsComponent;
  let fixture: ComponentFixture<SidenavProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
