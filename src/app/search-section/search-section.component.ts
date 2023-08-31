import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from "@angular/core";
import {MediaStoreService} from "../store/media/media-store.service";

@Component({
  selector: "app-search-section",
  templateUrl: "./search-section.component.html",
  styleUrls: ["./search-section.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchSectionComponent {

  constructor(private mediaStoreService: MediaStoreService) {
  }

  @Output()
  public clearChange = new EventEmitter<void>();

  public searchValue: string | null;

  public handleSearchChange(): void {
    this.mediaStoreService.loadSearchImages(<string> this.searchValue);
  }

  public handleClearChange(): void {
    this.searchValue = null;
    this.clearChange.emit();
  }
}
