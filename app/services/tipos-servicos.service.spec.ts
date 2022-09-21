import { TestBed } from '@angular/core/testing';

import { TiposServicosService } from './tipos-servicos.service';

describe('TiposServicosService', () => {
  let service: TiposServicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposServicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
