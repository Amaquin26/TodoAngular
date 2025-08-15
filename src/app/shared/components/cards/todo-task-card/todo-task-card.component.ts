import { Component, Input } from '@angular/core';
import { TodoTask } from '../../../../models/todo-task/todo-task';

@Component({
  selector: 'app-todo-task-card',
  templateUrl: './todo-task-card.component.html',
  styleUrl: './todo-task-card.component.css',
  standalone: false
})
export class TodoTaskCardComponent {
  @Input() todoTask!: TodoTask;
}
