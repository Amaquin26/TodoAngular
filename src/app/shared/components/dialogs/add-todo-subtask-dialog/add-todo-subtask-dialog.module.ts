import { NgModule } from "@angular/core";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from "primeng/toast";
import { AddTodoSubtaskDialogComponent } from "./add-todo-subtask-dialog.component";

@NgModule({
    declarations: [AddTodoSubtaskDialogComponent],
    imports: [
        DialogModule,
        ButtonModule,
        InputTextModule,
        ButtonModule,
        TextareaModule,
        ReactiveFormsModule,
        ToastModule 
    ],
    exports: [AddTodoSubtaskDialogComponent]
})
export class AddTodoSubtaskDialogModule {}