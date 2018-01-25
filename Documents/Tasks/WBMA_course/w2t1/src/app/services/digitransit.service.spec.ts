import { TestBed, inject } from '@angular/core/testing';

import { DigitransitService } from './digitransit.service';

describe('DigitransitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DigitransitService]
    });
  });

  it('should be created', inject([DigitransitService], (service: DigitransitService) => {
    expect(service).toBeTruthy();
  }));
});
