import { TestBed } from '@angular/core/testing';

import { GetSourceService } from './get-source.service';

describe('GetSourceService', () => {
  let service: GetSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
