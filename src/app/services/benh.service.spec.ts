import { TestBed, inject } from '@angular/core/testing';

import { BenhService } from './benh.service';

describe('BenhService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BenhService]
    });
  });

  it('should be created', inject([BenhService], (service: BenhService) => {
    expect(service).toBeTruthy();
  }));
});
