import { TestBed } from '@angular/core/testing';

import { HelloApiService } from './hello-api.service';

describe('HelloApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloApiService = TestBed.get(HelloApiService);
    expect(service).toBeTruthy();
  });
});
