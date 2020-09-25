import { TestBed } from '@angular/core/testing';

import { CreditCardControlService } from './credit-card-control.service';

describe('CreditCardControlService', () => {
  let service: CreditCardControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
