import { TestBed, inject } from '@angular/core/testing';

import { PhonebookService } from './phonebook.service.ts';

describe('PhonebookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhonebookService]
    });
  });

  it('should be created', inject([PhonebookService], (service: PhonebookService) => {
    expect(service).toBeTruthy();
  }));
});
