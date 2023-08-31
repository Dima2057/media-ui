import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
} from "@angular/core";

@Component({
  selector: "app-drop-files-section",
  templateUrl: "./drop-files-section.component.html",
  styleUrls: ["./drop-files-section.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropFilesSectionComponent {

  constructor(private cdr: ChangeDetectorRef) {
  }

  @Output()
  public selectedFileChange = new EventEmitter();

  public url: string | ArrayBuffer | null = "";
  public selectedFile: any;
  public message: string | null;

  public onFileDropped($event: any): void {
    this.validateInputFile($event[0].type);
    if (!this.message) {
      this.selectedFile = $event[0];
      this.loadImagePreview($event[0]);
    }
  }

  public onFileChanged(event: any): void {
    this.validateInputFile(event?.target?.files[0].type);
    if (!this.message) {
      this.selectedFile = event?.target?.files[0];
      this.loadImagePreview(event?.target?.files[0])
    }
  }

  public handleDelete(): void {
    this.clearFile();
  }

  public clearFile(): void {
    this.selectedFile = null;
    this.message = null;
    this.url = null;
    this.cdr.markForCheck();
  }

  private validateInputFile(mimeType: any): void {
    this.message = mimeType.match(/image\/*/) == null
      ? "Only images are supported."
      : null;
  }

  private loadImagePreview(event: any): void {
    const reader = new FileReader();
    reader.readAsDataURL(event);
    reader.onload = (_event) => {
      this.url = reader.result;
      this.cdr.markForCheck();
      this.selectedFileChange.emit(this.selectedFile);
    }
  }
}
