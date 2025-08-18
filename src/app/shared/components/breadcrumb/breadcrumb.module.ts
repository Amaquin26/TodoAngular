import { NgModule } from "@angular/core";
import { BreadcrumbComponent } from "./breadcrumb.component";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [BreadcrumbComponent],
    imports: [
        RouterLink,
        CommonModule
    ],
    exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {}