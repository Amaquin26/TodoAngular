import { NgModule } from "@angular/core";
import { TaskComponent } from "./task.component";
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from "primeng/button";

@NgModule({
    declarations: [TaskComponent],
    imports: [
        CardModule,
        DividerModule,
        CheckboxModule,
        ButtonModule
    ],
    exports: []
})
export class TaskModule {

}