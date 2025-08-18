import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoSubtaskService } from '../../../../api-services/todo-subtask/todo-subtask.service';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo-subtask-dialog',
  templateUrl: './add-todo-subtask-dialog.component.html',
  styleUrl: './add-todo-subtask-dialog.component.css',
  standalone: false,
  providers:[MessageService]
})
export class AddTodoSubtaskDialogComponent implements OnInit {
  constructor(
    private todoSubtaskService: TodoSubtaskService,
    private messageService: MessageService
  ) {}

  @Input() class: string = '';
  @Input() todoTaskId: number = 0;
  @Output() addTodoTaskEvent: EventEmitter<void> = new EventEmitter();

  componentDestroyed$ = new Subject<void>();
  addTodoSubtaskForm!: FormGroup;
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    
    if (!this.addTodoSubtaskForm.valid) {
      return;
    }

    this.todoSubtaskService.addTodoSubtasksByTodoTaskId(this.addTodoSubtaskForm.value)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe({
        next: (_) => {
          this.visible = false;
          this.addTodoSubtaskForm.reset();
          this.messageService.add({severity: "success", summary: "Added", detail: "Todo Subtask added successfully", life: 3000});
          this.addTodoTaskEvent.emit();
        },
        error: (err) => {
          this.messageService.add({severity: "error", summary: "Failed", detail: err.message ?? "Todo Subtask added unsuccessfully", life: 3000});
        },
      });

    this.visible = false;
  }

  ngOnInit() {
    this.addTodoSubtaskForm = new FormGroup({
      todoTaskId: new FormControl(this.todoTaskId),
      name: new FormControl('', [Validators.required]),
    });
  }
}
