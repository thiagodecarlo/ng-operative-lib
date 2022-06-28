import { TestBed } from '@angular/core/testing';

import { OperativeInputsService } from './operative-inputs.service';

describe('OperativeInputsService', () => {
  let service: OperativeInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperativeInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
