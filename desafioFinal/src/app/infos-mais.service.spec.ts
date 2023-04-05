import { TestBed } from '@angular/core/testing';

import { InfosMaisService } from './infos-mais.service';

describe('InfosMaisService', () => {
  let service: InfosMaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfosMaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
