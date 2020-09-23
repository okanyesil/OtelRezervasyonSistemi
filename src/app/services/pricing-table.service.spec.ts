import { TestBed } from '@angular/core/testing';

import { PricingTableService } from './pricing-table.service';

describe('PricingTableService', () => {
  let service: PricingTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricingTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
