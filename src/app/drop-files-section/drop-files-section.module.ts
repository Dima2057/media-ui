import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {DropFilesSectionComponent} from "./drop-files-section.component";
import {DragAndDropDirective} from "./drag-and-drop.directive";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    DropFilesSectionComponent,
    DragAndDropDirective,
  ],
    imports: [
        CommonModule,
        ButtonModule,
    ],
  exports: [
    DropFilesSectionComponent
  ]
})
export class DropFilesSectionModule {
}
