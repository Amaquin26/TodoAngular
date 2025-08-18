import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { TodoTaskCardModule } from "../../shared/components/cards/todo-task-card/todo-task-card.module";
import { AddTodoTaskDialogModule } from "../../shared/components/dialogs/add-todo-task-dialog/add-todo-task-dialog.module";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Toast } from 'primeng/toast';
import { SkeletonModule } from "primeng/skeleton";

@NgModule({
    declarations: [HomeComponent],
    imports: [
        TodoTaskCardModule,
        TodoTaskCardModule,
        AddTodoTaskDialogModule,
        CommonModule,
        RouterLink,
        Toast,
        SkeletonModule
    ],
    exports: []
})
export class HomeModule {}