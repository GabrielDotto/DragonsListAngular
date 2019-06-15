import { TestBed } from '@angular/core/testing';

import { DragonServiceService } from "./dragon-service.service";

describe('DragonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragonServiceService = TestBed.get(DragonServiceService);
    expect(service).toBeTruthy();
  });
});
