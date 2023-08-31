import {
  ChangeDetectionStrategy,
  Component,
} from "@angular/core";
import {MediaRestService} from "../store/media/media-rest.service";
import {MediaStoreService} from "../store/media/media-store.service";

@Component({
  selector: "app-search-section",
  templateUrl: "./search-section.component.html",
  styleUrls: ["./search-section.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchSectionComponent {

  constructor(private mediaRestService: MediaRestService, private mediaStoreService: MediaStoreService) {
  }

  public searchValue: string;

  public handleSearchChange(): void {
    console.log(this.searchValue);
    this.mediaStoreService.loadSearchImages(this.searchValue);
    // this.mediaRestService.searchImages(this.searchValue).subscribe((images) => {
    //   console.log(images);
    // });
  }
}
