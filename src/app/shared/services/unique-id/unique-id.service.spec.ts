import { TestBed } from '@angular/core/testing';

import { UniqueIDService } from './unique-id.service';

describe('UniqueIDService', () => {
  let service: UniqueIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
