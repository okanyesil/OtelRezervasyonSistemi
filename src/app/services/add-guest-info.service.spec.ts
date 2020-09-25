import { TestBed } from '@angular/core/testing';

import { AddGuestInfoService } from './add-guest-info.service';

describe('AddGuestInfoService', () => {
  let service: AddGuestInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddGuestInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
