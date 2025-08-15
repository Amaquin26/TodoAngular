import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoTaskService } from '../../../../api-services/todo-task/todo-task.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-todo-task-dialog',
  templateUrl: './add-todo-task-dialog.component.html',
  styleUrl: './add-todo-task-dialog.component.css',
  standalone: false,
  providers:[MessageService]
})
export class AddTodoTaskDialogComponent implements OnInit {
  constructor(
    private todoTaskService:TodoTaskService, 
    private router:Router,
    private messageService: MessageService
  ) {}

  @Input() class: string = '';
  
  componentDestroyed$ = new Subject<void>();
  addTodoTaskForm!: FormGroup;
  visible: boolean = false;
  
  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    
    if (!this.addTodoTaskForm.valid) {
      return;
    }

    this.todoTaskService.createTodoTask(this.addTodoTaskForm.value)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe({
        next: (todoTaskId) => {
          this.visible = false;
          this.addTodoTaskForm.reset();
          this.messageService.add({severity: "success", summary: "Added", detail: "Todo Task added successfully", life: 3000});
          this.router.navigateByUrl(`/task/${todoTaskId}`);
        },
        error: (err) => {
          this.messageService.add({severity: "error", summary: "Failed", detail: err.message ?? "Todo Task added unsuccessfully", life: 3000});
        },
      });

    this.visible = false;
  }

  ngOnInit() {
    this.addTodoTaskForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('')
    });
  }
}
