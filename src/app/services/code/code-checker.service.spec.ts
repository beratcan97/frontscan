import { TestBed } from '@angular/core/testing';

import { CodeCheckerService } from './code-checker.service';

describe('CodeCheckerService', () => {
  let service: CodeCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
