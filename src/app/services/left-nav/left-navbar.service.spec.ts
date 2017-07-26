import { TestBed, inject } from '@angular/core/testing';

import { LeftNavbarService} from './left-navbar.service';

describe('LeftNavbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeftNavbarService]
    });
  });

  it('should be created', inject([LeftNavbarService], (service: LeftNavbarService) => {
    expect(service).toBeTruthy();
  }));
});
