import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {loadImages, searchImages, uploadImage} from "./media.actions";
import {Observable} from "rxjs";
import {ImageCard} from "../../image-card/image-card.model";
import {selectImages, selectSearchImages} from "./media.selectors";
import {AppState} from "../state";

@Injectable({
  providedIn: "root",
})
export class MediaStoreService {

  constructor(private store: Store<AppState>) {
  }

  public loadImages = (): void =>
    this.store.dispatch(loadImages());

  public getImages = (): Observable<ImageCard[]> =>
    this.store.select(selectImages());

  public uploadImage = (imageData: FormData): void =>
    this.store.dispatch(uploadImage({ imageData }));

  public loadSearchImages = (searchLabel: string): void =>
    this.store.dispatch(searchImages({ searchLabel }));

  public getSearchImages = ():Observable<ImageCard[]> =>
    this.store.select(selectSearchImages());
}
