import { TestBed } from '@angular/core/testing';

import { TodoSubtaskService } from './todo-subtask.service';

describe('TodoSubtaskService', () => {
  let service: TodoSubtaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoSubtaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
