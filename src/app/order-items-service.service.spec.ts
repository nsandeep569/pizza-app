import { TestBed } from '@angular/core/testing';

import { OrderItemsServiceService } from './order-items-service.service';

describe('OrderItemsServiceService', () => {
  let service: OrderItemsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderItemsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
