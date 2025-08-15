import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { TodoTaskCardModule } from "../../shared/components/cards/todo-task-card/todo-task-card.module";
import { AddTodoTaskDialogModule } from "../../shared/components/dialogs/add-todo-task-dialog/add-todo-task-dialog.module";

@NgModule({
    declarations: [HomeComponent],
    imports: [
    TodoTaskCardModule,
    TodoTaskCardModule,
    AddTodoTaskDialogModule
],
    exports: []
})
export class HomeModule {}