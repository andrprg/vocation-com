import { TestBed, inject } from '@angular/core/testing';

import { VocationService } from './vocation.service';
import { Month, Vocation } from '../Models';

describe('VocationService', () => {
  let months: Month[] = null;
  let vocation: Vocation = null;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [VocationService]
  }));

  beforeEach(() => {
    months = [
      new Month(new Date(2019, 1), 100, 7),
      new Month(new Date(2019, 2), 100, 0),
      new Month(new Date(2019, 3), 100, 0),
      new Month(new Date(2019, 4), 100, 0),
      new Month(new Date(2019, 5), 173, 3)
    ];
  });

  it('should be created', () => {
    const service: VocationService = TestBed.get(VocationService);
    expect(service).toBeTruthy();
  });

  it('должен возвращать количество дней в полных месяцах getCountDaysInFullMonth',
    inject([VocationService], (service: VocationService) => {
      const days = service.getCountDaysInFullMonth(months);
      expect(days).toEqual(87.9)
    }));

  it('должен возвращать количество дней в не полных месяцах getCountDaysInFullMonth',
    inject([VocationService], (service: VocationService) => {
      const days = service.getCountDaysInNotFullMonth(months);
      expect(days).toEqual(48.345);
    }));

  it('должен вернуть сумму всех начислений getSummTotal', inject([VocationService], (service: VocationService) => {
    const summ = service.getSummTotal(months);
    expect(summ).toEqual(573);
  }));
});
