import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ImagesListPageComponent} from "./images-list-page.component";
import {ImagesListPageRoutingModule} from "./images-list-page-routing.module";
import {ImageCardModule} from "../image-card/image-card.module";
import {SearchSectionModule} from "../search-section/search-section.module";
import {ButtonModule} from "primeng/button";
import {PaginatorModule} from "primeng/paginator";
import {DialogModule} from "primeng/dialog";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {DropFilesSectionModule} from "../drop-files-section/drop-files-section.module";

@NgModule({
  declarations: [
    ImagesListPageComponent
  ],
  imports: [
    CommonModule,
    ImagesListPageRoutingModule,
    ImageCardModule,
    SearchSectionModule,
    ButtonModule,
    PaginatorModule,
    DialogModule,
    OverlayPanelModule,
    DropFilesSectionModule,
  ],
})
export class ImagesListPageModule {
}
