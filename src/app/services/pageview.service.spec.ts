import { TestBed } from '@angular/core/testing';

import { PageviewService } from './pageview.service';

describe('PageviewService', () => {
  let service: PageviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
