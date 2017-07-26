import { TestBed, inject } from '@angular/core/testing';

import { ForumBarService } from './forum-bar.service';

describe('ForumBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumBarService]
    });
  });

  it('should be created', inject([ForumBarService], (service: ForumBarService) => {
    expect(service).toBeTruthy();
  }));
});
