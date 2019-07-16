import { TestBed } from '@angular/core/testing';

import { VocationService } from './vocation.service';

describe('VocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VocationService = TestBed.get(VocationService);
    expect(service).toBeTruthy();
  });
});
