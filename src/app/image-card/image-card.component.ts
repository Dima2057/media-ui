import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from "@angular/core";
import {ImageCard} from "./image-card.model";

@Component({
  selector: "app-image-card",
  templateUrl: "./image-card.component.html",
  styleUrls: ["./image-card.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCardComponent {

  @Input()
  public card: ImageCard;
}
