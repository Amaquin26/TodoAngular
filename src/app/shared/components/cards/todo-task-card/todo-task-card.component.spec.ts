import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskCardComponent } from './todo-task-card.component';

describe('TodoTaskCardComponent', () => {
  let component: TodoTaskCardComponent;
  let fixture: ComponentFixture<TodoTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoTaskCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
