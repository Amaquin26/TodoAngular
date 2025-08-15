import { NgModule } from "@angular/core";
import { TodoTaskCardComponent } from "./todo-task-card.component";
import { CardModule } from 'primeng/card';


@NgModule({
    declarations: [TodoTaskCardComponent],
    imports: [
        CardModule
    ],    
    exports: [TodoTaskCardComponent]
})
export class TodoTaskCardModule {}