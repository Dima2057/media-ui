import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, OnInit,
} from "@angular/core";
import {PaginatorState} from "primeng/paginator";
import {MediaRestService} from "../store/media/media-rest.service";
import {ImageCard} from "../image-card/image-card.model";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {MediaStoreService} from "../store/media/media-store.service";

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@UntilDestroy()
@Component({
  selector: "app-images-list-page",
  templateUrl: "./images-list-page.component.html",
  styleUrls: ["./images-list-page.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesListPageComponent implements OnInit {

  constructor(
    private cdr: ChangeDetectorRef,
    private mediaStoreService: MediaStoreService,
    private mediaRestService: MediaRestService,
  ) {
  }

  public cards: ImageCard[];
  public first3: number = 0;
  public rows3: number = 10;
  public filledFilter: boolean = true;

  public totalRecords: number = 120;
  public visible: boolean = false;
  public selectedFile: any;

  public ngOnInit(): void {
    this.mediaStoreService.loadImages();
    this.mediaStoreService.getImages()
      .pipe(untilDestroyed(this))
      .subscribe((imageCards: ImageCard[]) => {
        this.cards = imageCards;
        this.cdr.markForCheck();
      })
    this.mediaStoreService.getSearchImages()
      .pipe(untilDestroyed(this))
      .subscribe((searchImages: ImageCard[]) => {
        this.cards = searchImages;
        this.cdr.markForCheck();
      })
  }

  public onPageChange3(event: PaginatorState): void {
    this.first3 = (<PageEvent>event).first;
    this.rows3 = (<PageEvent>event).rows;
  }

  public handleAddImage(): void {
    this.visible = true;
  }

  public onUpload(): void {
    this.visible = false;
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    console.log(uploadImageData);
    this.mediaStoreService.uploadImage(uploadImageData);
    this.mediaStoreService
      .getImages()
      .pipe(untilDestroyed(this))
      .subscribe((imageCards: ImageCard[]) => {
          this.cards = imageCards;
          this.cdr.markForCheck();
      });
  }

  public handleSelectedFileChange($event: any): void {
    this.selectedFile = $event;
  }
}
