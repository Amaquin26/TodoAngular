import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TodoTaskService } from '../../../../api-services/todo-task/todo-task.service';
import { Subject, takeUntil } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoTask } from '../../../../models/todo-task/todo-task';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-todo-task-dialog',
  templateUrl: './edit-todo-task-dialog.component.html',
  styleUrl: './edit-todo-task-dialog.component.css',
  standalone: false,
  providers: [MessageService],
})
export class EditTodoTaskDialogComponent implements OnInit, OnChanges {
  constructor(private todoTaskService:TodoTaskService, private messageService: MessageService) {}

  @Input() class: string = '';
  @Input() todoTask!: TodoTask;
  @Output() editTodoTaskEvent = new EventEmitter();
  
  componentDestroyed$ = new Subject<void>();
  editTodoTaskForm!: FormGroup;
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
      
    if (!this.editTodoTaskForm.valid) {
      return;
    }

    this.todoTaskService.updateTodoTask({
      id: this.todoTask.id,
      ...this.editTodoTaskForm.value
    })
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe({
        next: (_) => {
          this.visible = false;
          this.editTodoTaskForm.reset();
          this.editTodoTaskEvent.emit();
          this.messageService.add({severity: "success", summary: "Updated", detail: "Todo Task updated successfully", life: 3000});
        },
        error: (err) => {
          this.messageService.add({severity: "error", summary: "Failed", detail: err.message ?? "Todo Task updated unsuccessfully", life: 3000});
        },
      }); 

    this.visible = false;
  }

  ngOnInit() {
    this.editTodoTaskForm = new FormGroup({
      title: new FormControl(this.todoTask.title, [Validators.required]),
      description: new FormControl(this.todoTask.description)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['todoTask'] && !changes['todoTask'].firstChange) {
      const current = changes['todoTask'].currentValue as TodoTask;

      this.editTodoTaskForm.patchValue({
        title: current.title,
        description: current.description
      });
    }
  }
}
