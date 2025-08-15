import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { TodoTaskService } from '../../api-services/todo-task/todo-task.service';
import { TodoTask } from '../../models/todo-task/todo-task';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { TodoSubtaskService } from '../../api-services/todo-subtask/todo-subtask.service';
import { TodoSubtask } from '../../models/todo-subtask/todo-subtask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  providers: [MessageService, ConfirmationService],
  standalone: false
})
export class TaskComponent implements OnInit {
  constructor(
    private route: ActivatedRoute, 
    private todoTaskService:TodoTaskService,
    private todoSubtaskService:TodoSubtaskService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ){}

  componentDestroyed$ = new Subject<void>();
  todoTaskId!: string;
  todoTask = signal<TodoTask | null>(null);
  todoSubtasks = signal<TodoSubtask[]>([]);

  private getTaskIdFromRoute() {
    this.todoTaskId = this.route.snapshot.paramMap.get('id')!;

    this.route.paramMap
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe(params => {
      this.todoTaskId = params.get('id')!;
    });
  }

  protected getTodoTaskById() {
  this.todoTaskService.getTodoTaskById(Number(this.todoTaskId))
    .pipe(
      takeUntil(this.componentDestroyed$),
      tap(task => this.todoTask.set(task)),
      switchMap(() => 
        this.todoSubtaskService.getTodoSubtasksByTodoTaskId(Number(this.todoTaskId))
      ),
      tap(subtasks => this.todoSubtasks.set(subtasks))
    )
    .subscribe();
}

  protected getTodoSubtasks() {
    this.todoSubtaskService.getTodoSubtasksByTodoTaskId(Number(this.todoTaskId))
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe(subtasks => {
      this.todoSubtasks.set(subtasks);
    });
  }

  showToast(
    severity: string,
    summary: string,
    detail: string,
    life: number = 3000
  ) {
    this.messageService.add({ severity, summary, detail, life });
  }

  private deleteTodoTask() {
    this.todoTaskService.deleteTodoTask(Number(this.todoTaskId))
    .pipe(
      takeUntil(this.componentDestroyed$),
      finalize(() => {
        this.router.navigate(['/']);
      })
    )
    .subscribe({
      next: (_) => {
        this.showToast('info', 'Deleted', 'Todo Task deleted successfully');
      },
      error: (err) => {
        this.showToast('error', 'Failed', err.message || 'Failed to delete Todo Task');
      },
    }); 
  }

  protected showDeleteConfirmation(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this Todo Task?',
      header: 'Delete Todo Task',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
          label: 'Cancel',
          severity: 'secondary',
          outlined: true,
      },
      acceptButtonProps: {
          label: 'Delete',
          severity: 'danger',
      },
      accept: () => {
        this.deleteTodoTask();
      }
    });
  }

  ngOnInit(): void {
    this.getTaskIdFromRoute();
    this.getTodoTaskById();
  }
}
