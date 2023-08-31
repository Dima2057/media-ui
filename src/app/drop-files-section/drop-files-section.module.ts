import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {DropFilesSectionComponent} from "./drop-files-section.component";
import {DragAndDropDirective} from "./drag-and-drop.directive";

@NgModule({
  declarations: [
    DropFilesSectionComponent,
    DragAndDropDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DropFilesSectionComponent
  ]
})
export class DropFilesSectionModule {
}
