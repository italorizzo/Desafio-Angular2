import { TestBed } from '@angular/core/testing';

import { SaibamaisService } from './service/saibamais.service';

describe('SaibamaisService', () => {
  let service: SaibamaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaibamaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
