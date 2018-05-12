import { TestBed, inject } from '@angular/core/testing';

import { EnsaioService } from './ensaio.service';

describe('EnsaioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsaioService]
    });
  });

  it('should be created', inject([EnsaioService], (service: EnsaioService) => {
    expect(service).toBeTruthy();
  }));
});
