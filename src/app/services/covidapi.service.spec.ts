import { TestBed } from '@angular/core/testing';

import { CovidapiService } from './covidapi.service';

describe('CovidapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CovidapiService = TestBed.get(CovidapiService);
    expect(service).toBeTruthy();
  });
});
