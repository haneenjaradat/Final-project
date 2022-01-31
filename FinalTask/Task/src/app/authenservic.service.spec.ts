import { TestBed } from '@angular/core/testing';

import { AuthenservicService } from './authenservic.service';

describe('AuthenservicService', () => {
  let service: AuthenservicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenservicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
