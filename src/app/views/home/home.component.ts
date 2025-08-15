import { Component, OnInit, signal } from '@angular/core';
import { TodoTaskService } from '../../api-services/todo-task/todo-task.service';
import { Subject, takeUntil } from 'rxjs';
import { TodoTask } from '../../models/todo-task/todo-task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: false,
})
export class HomeComponent implements OnInit{
  constructor(private todoTaskService:TodoTaskService) {}

  private componentDestroyed$ = new Subject<void>();
  protected todoTasks = signal<TodoTask[]>([]);

  private loadTodoTasks() {
    this.todoTaskService.getTodoTasks()
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe(tasks => {
      this.todoTasks.set(tasks);
    });
  }

  ngOnInit(): void {
    this.loadTodoTasks();
  }
}
