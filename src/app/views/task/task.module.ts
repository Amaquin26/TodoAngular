import { NgModule } from "@angular/core";
import { TaskComponent } from "./task.component";
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from "primeng/button";
import { ToastModule } from 'primeng/toast';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { EditTodoTaskDialogModule } from "../../shared/components/dialogs/edit-todo-task-dialog/edit-todo-task-dialog.module";
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from "@angular/common";
import { AddTodoSubtaskDialogModule } from "../../shared/components/dialogs/add-todo-subtask-dialog/add-todo-subtask-dialog.module";
import { TodoSubtaskCardModule } from "../../shared/components/cards/todo-subtask-card/todo-subtask-card.module";
import { BreadcrumbModule } from "../../shared/components/breadcrumb/breadcrumb.module";

@NgModule({
    declarations: [
        TaskComponent
    ],
    imports: [
        CardModule,
        DividerModule,
        CheckboxModule,
        ButtonModule,
        ToastModule,
        ConfirmDialog,
        EditTodoTaskDialogModule,
        SkeletonModule,
        CommonModule,
        AddTodoSubtaskDialogModule,
        TodoSubtaskCardModule,
        BreadcrumbModule
    ],
    exports: []
})
export class TaskModule {

}