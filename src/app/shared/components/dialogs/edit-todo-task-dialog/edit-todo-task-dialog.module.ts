import { NgModule } from "@angular/core";
import { EditTodoTaskDialogComponent } from "./edit-todo-task-dialog.component";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from "primeng/toast";

@NgModule({
    declarations: [EditTodoTaskDialogComponent],
    imports: [
        DialogModule,
        ButtonModule,
        InputTextModule,
        ButtonModule,
        TextareaModule,
        ReactiveFormsModule,
        ToastModule
    ],
    exports: [EditTodoTaskDialogComponent]
})
export class EditTodoTaskDialogModule {}