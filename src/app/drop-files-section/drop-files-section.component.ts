import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, EventEmitter, Output,
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
  public message: string;

  onFileDropped($event: any) {
    console.log($event);
    const mimeType = $event[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    this.selectedFile = $event[0];
    const reader = new FileReader();
    reader.readAsDataURL($event[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
      this.cdr.markForCheck();
      this.selectedFileChange.emit(this.selectedFile);
    }
  }

  public onFileChanged(event: any): void {
    console.log(event);
    console.log(event?.target?.files[0]);
    console.log(this.selectedFile);
    const mimeType = event?.target?.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    this.selectedFile = event?.target?.files[0];
    reader.readAsDataURL(event?.target?.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
      this.cdr.markForCheck();
      this.selectedFileChange.emit(this.selectedFile);
    }
  }

  deleteFile() {
    this.selectedFile = null;
    this.url = null;
  }
}
