import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-todo-task-dialog',
  templateUrl: './add-todo-task-dialog.component.html',
  styleUrl: './add-todo-task-dialog.component.css',
  standalone: false
})
export class AddTodoTaskDialogComponent {
  @Input() class: string = '';

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
