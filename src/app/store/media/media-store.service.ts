import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {MediaState} from "./media.state";

@Injectable({
  providedIn: "root",
})
export class MediaStoreService {

  constructor(private store: Store<MediaState>) {
  }
}
