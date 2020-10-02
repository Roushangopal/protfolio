import { TestBed } from '@angular/core/testing';

import { StudentDetailService } from './student-detail.service';

describe('StudentDetailService', () => {
  let service: StudentDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
