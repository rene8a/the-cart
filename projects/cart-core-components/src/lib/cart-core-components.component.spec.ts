import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCoreComponentsComponent } from './cart-core-components.component';

describe('CartCoreComponentsComponent', () => {
  let component: CartCoreComponentsComponent;
  let fixture: ComponentFixture<CartCoreComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCoreComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCoreComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
