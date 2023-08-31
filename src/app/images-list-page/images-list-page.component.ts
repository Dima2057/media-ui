import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import {PaginatorState} from "primeng/paginator";
import {ImageCard} from "../image-card/image-card.model";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {MediaStoreService} from "../store/media/media-store.service";
import {DropFilesSectionComponent} from "../drop-files-section/drop-files-section.component";

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
  ) {
  }

  @ViewChild(DropFilesSectionComponent, { static: true })
  public dropFilesRef: DropFilesSectionComponent;

  public selectedFile: any;
  public cards: ImageCard[];
  public first: number = 0;
  public rows: number = 10;
  public filledFilter: boolean = true;
  public totalRecords: number = 120;
  public visible: boolean = false;


  public ngOnInit(): void {
    this.mediaStoreService.loadImages();
    this.listenForImages();
    this.listenForSearchImages();
  }

  public handleAddImage(): void {
    this.visible = true;
  }

  public onUpload(): void {
    this.visible = false;
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.mediaStoreService.uploadImage(uploadImageData);
    this.dropFilesRef.clearFile();
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

  public handleClearChange(): void {
    this.listenForImages();
  }

  private listenForImages(): void {
    this.mediaStoreService.getImages()
      .pipe(untilDestroyed(this))
      .subscribe((imageCards: ImageCard[]) => {
        this.cards = imageCards;
        this.cdr.markForCheck();
      })
  }

  private listenForSearchImages(): void {
    this.mediaStoreService.getSearchImages()
      .pipe(untilDestroyed(this))
      .subscribe((searchImages: ImageCard[]) => {
        this.cards = searchImages;
        this.cdr.markForCheck();
      });
  }


  public onPageChange(event: PaginatorState): void {
    this.first = (<PageEvent>event).first;
    this.rows = (<PageEvent>event).rows;
  }
}
