import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoSubtask } from '../../../../models/todo-subtask/todo-subtask';
import { TodoSubtaskService } from '../../../../api-services/todo-subtask/todo-subtask.service';
import { Subject, takeUntil } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-todo-subtask-card',
  templateUrl: './todo-subtask-card.component.html',
  styleUrl: './todo-subtask-card.component.css',
  standalone: false,
  providers: [MessageService, ConfirmationService]
})
export class TodoSubtaskCardComponent {

  constructor(
    private todoSubtaskService: TodoSubtaskService, 
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ){}

  @Input() isEditMode: boolean = false;
  @Input() set todoSubtask(value: TodoSubtask) {
    this._todoSubtask = { ...value };
  }
  @Output() deleteTodoSubtaskEvent = new EventEmitter();

  componentDestroyed$ = new Subject<void>();
  _todoSubtask!: TodoSubtask;

  showToast(
    severity: string,
    summary: string,
    detail: string,
    life: number = 3000
  ) {
    this.messageService.add({ severity, summary, detail, life });
  }

  toggleTodoSubtaskCheckStatus(){
    this.todoSubtaskService.toggleTodoSubtaskCheckStatus(this._todoSubtask.id)
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe({
      next: (newCheckStatus) => {
        this._todoSubtask.isChecked = newCheckStatus;
      },
      error: (err) => {
        this.showToast('error', 'Failed', err.message ?? 'Todo Subtask toggle check status unsuccessfully');
      },
    });
  }
  
  private deleteTodoTask() {
    this.todoSubtaskService.deleteTodoSubtask(this._todoSubtask.id)
    .pipe(
      takeUntil(this.componentDestroyed$)
    )
    .subscribe({
      next: (_) => {
        this.showToast('info', 'Deleted', 'Todo Subtask deleted successfully');
        this.deleteTodoSubtaskEvent.emit();
      },
      error: (err) => {
        this.showToast('error', 'Failed', err.message || 'Failed to delete Todo Subtask');
      },
    }); 
  }

  showDeleteConfirmation(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this Todo Subtask?',
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

  
  onUpdateTodoSubtask(name: string){
    this._todoSubtask.name = name;
  }
}
