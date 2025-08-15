import { NgModule } from "@angular/core";
import { TodoTaskCardComponent } from "./todo-task-card.component";
import { CardModule } from 'primeng/card';
import { RouterLink } from "@angular/router";



@NgModule({
    declarations: [TodoTaskCardComponent],
    imports: [
        CardModule,
        RouterLink
    ],    
    exports: [TodoTaskCardComponent]
})
export class TodoTaskCardModule {}