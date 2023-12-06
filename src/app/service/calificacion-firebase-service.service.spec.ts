import { TestBed } from '@angular/core/testing';

import { CalificacionFirebaseServiceService } from './calificacion-firebase-service.service';

describe('CalificacionFirebaseServiceService', () => {
  let service: CalificacionFirebaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalificacionFirebaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
