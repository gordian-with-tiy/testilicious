import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CarrotJuiceService } from './carrot-juice.service';

describe('CarrotJuiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CarrotJuiceService]
    });
  });

  it('should be created', inject([CarrotJuiceService], (service: CarrotJuiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should make carrot juice', inject([CarrotJuiceService], (service: CarrotJuiceService) => {
    expect(service.makeJuice('carrot')).toBe('juice');
  }));

  it('should not make apple juice', inject([CarrotJuiceService], (service: CarrotJuiceService) => {
    expect(() => service.makeJuice('apple')).toThrow();
  }));
});
