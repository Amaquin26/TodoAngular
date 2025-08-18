import { NgModule } from "@angular/core";
import { EditTodoSubtaskDialogComponent } from "./edit-todo-subtask-dialog.component";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from "primeng/toast";

@NgModule({
    declarations: [EditTodoSubtaskDialogComponent],
    imports: [
        DialogModule,
        ButtonModule,
        InputTextModule,
        ButtonModule,
        ReactiveFormsModule,
        ToastModule
    ],
    exports: [EditTodoSubtaskDialogComponent]
})
export class EditTodoSubtaskDialogModule {}