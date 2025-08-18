import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TodoSubtaskService } from '../../../../api-services/todo-subtask/todo-subtask.service';
import { TodoSubtask } from '../../../../models/todo-subtask/todo-subtask';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-edit-todo-subtask-dialog',
  templateUrl: './edit-todo-subtask-dialog.component.html',
  styleUrl: './edit-todo-subtask-dialog.component.css',
  standalone: false,
  providers: [MessageService]
})
export class EditTodoSubtaskDialogComponent implements OnInit, OnChanges{
  constructor(private todoSubtaskService:TodoSubtaskService, private messageService: MessageService) {}

  @Input() class: string = '';
  @Input() todoSubtask!: TodoSubtask;
  @Output() editTodoTaskEvent = new EventEmitter<string>();

  componentDestroyed$ = new Subject<void>();
  editTodoSubtaskForm!: FormGroup;
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
      
    if (!this.editTodoSubtaskForm.valid) {
      return;
    }

    this.todoSubtaskService.updateTodoSubtask({
      id: this.todoSubtask.id,
      ...this.editTodoSubtaskForm.value
    })
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe({
        next: (_) => {
          this.visible = false;
          this.editTodoTaskEvent.emit(this.editTodoSubtaskForm.get('name')?.value);
          this.editTodoSubtaskForm.reset();
          this.messageService.add({severity: "success", summary: "Updated", detail: "Todo Subtask updated successfully", life: 3000});
        },
        error: (err) => {
          this.messageService.add({severity: "error", summary: "Failed", detail: err.message ?? "Todo Subtask updated unsuccessfully", life: 3000});
        },
      }); 

    this.visible = false;
  }

  ngOnInit() {
    this.editTodoSubtaskForm = new FormGroup({
      name: new FormControl(this.todoSubtask.name, [Validators.required]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['todoSubtask'] && !changes['todoSubtask'].firstChange) {
      const current = changes['todoSubtask'].currentValue as TodoSubtask;

      this.editTodoSubtaskForm.patchValue({
        name: current.name
      });
    }
  }
}
