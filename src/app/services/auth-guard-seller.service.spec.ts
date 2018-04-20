import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardSellerService } from './auth-guard-seller.service';

describe('AuthGuardSellerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardSellerService]
    });
  });

  it('should be created', inject([AuthGuardSellerService], (service: AuthGuardSellerService) => {
    expect(service).toBeTruthy();
  }));
});
