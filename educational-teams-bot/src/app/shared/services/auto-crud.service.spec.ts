import { TestBed } from '@angular/core/testing';

import { AutoCrudService } from './auto-crud.service';

describe('AutoCrudService', () => {
  let service: AutoCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
