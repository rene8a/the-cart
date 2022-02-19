import { TestBed } from '@angular/core/testing';

import { CartCoreComponentsService } from './cart-core-components.service';

describe('CartCoreComponentsService', () => {
  let service: CartCoreComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartCoreComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
