import { TestBed } from '@angular/core/testing';

import { TabsService } from '../../tabs.service';

describe('TabsService', () => {
  let service: TabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
