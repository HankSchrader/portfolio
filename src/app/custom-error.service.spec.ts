import { TestBed } from '@angular/core/testing';

import { CustomErrorService } from './custom-error.service';

describe('CustomErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomErrorService = TestBed.get(CustomErrorService);
    expect(service).toBeTruthy();
  });
});
