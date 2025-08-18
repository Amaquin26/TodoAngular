import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSubtaskCardComponent } from './todo-subtask-card.component';

describe('TodoSubtaskCardComponent', () => {
  let component: TodoSubtaskCardComponent;
  let fixture: ComponentFixture<TodoSubtaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoSubtaskCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSubtaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
