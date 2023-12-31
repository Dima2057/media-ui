import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ImageCardComponent} from "./image-card.component";
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";
import {ImageSizePipe} from "./image-size.pipe";

@NgModule({
  declarations: [
    ImageCardComponent,
    ImageSizePipe,
  ],
  imports: [
    CommonModule,
    CardModule,
    ImageModule,
  ],
  exports: [
    ImageCardComponent
  ]
})
export class ImageCardModule {
}
