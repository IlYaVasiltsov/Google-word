import { TestBed } from '@angular/core/testing';

import { DovumentServiceService } from './dovument-service.service';

describe('DovumentServiceService', () => {
  let service: DovumentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DovumentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
