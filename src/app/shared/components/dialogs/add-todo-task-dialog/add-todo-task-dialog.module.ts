import { NgModule } from "@angular/core";
import { AddTodoTaskDialogComponent } from "./add-todo-task-dialog.component";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@NgModule({
    declarations: [AddTodoTaskDialogComponent],
    imports: [
        DialogModule,
        ButtonModule,
        InputTextModule,
        ButtonModule,
        TextareaModule
    ],
    exports: [AddTodoTaskDialogComponent]
})
export class AddTodoTaskDialogModule {}