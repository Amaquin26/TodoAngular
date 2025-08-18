import { NgModule } from "@angular/core";
import { TodoSubtaskCardComponent } from "./todo-subtask-card.component";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ToastModule } from "primeng/toast";
import { CheckedTodoSubtaskDirective } from "../../../common/direcives/checked-todo-subtask.directive";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { EditTodoSubtaskDialogModule } from "../../dialogs/edit-todo-subtask-dialog/edit-todo-subtask-dialog.module";

@NgModule({
    declarations: [TodoSubtaskCardComponent],
    imports: [
        ButtonModule,
        CheckboxModule,
        CommonModule,
        FormsModule,
        ToastModule,
        FormsModule,
        CheckedTodoSubtaskDirective,
        ConfirmDialogModule,
        EditTodoSubtaskDialogModule
    ],
    exports: [TodoSubtaskCardComponent]
})
export class TodoSubtaskCardModule {}