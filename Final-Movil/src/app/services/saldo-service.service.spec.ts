import { TestBed } from '@angular/core/testing';

import { SaldoServiceService } from './saldo-service.service';

describe('SaldoServiceService', () => {
  let service: SaldoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaldoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
