import {Injectable} from "@angular/core";
import {
  Actions,
  createEffect,
  ofType,
} from "@ngrx/effects";
import {
  loadImages,
  loadImagesFailure,
  loadImagesSuccess, searchImages, searchImagesFailure, searchImagesSuccess,
  uploadImage,
  uploadImageFailure,
  uploadImageSuccess
} from "./media.actions";
import {MediaRestService} from "./media-rest.service";
import {catchError, map, of, switchMap} from "rxjs";
import {ImageCard} from "../../image-card/image-card.model";

@Injectable()
export class MediaEffects {

  constructor(
    private actions$: Actions,
    private mediaRestService: MediaRestService,
  ) {
  }

  public loadImages$ = createEffect(() => this.actions$.pipe(
    ofType(loadImages),
    switchMap(() =>
      this.mediaRestService.loadImages().pipe(
        map((images: ImageCard[]) =>
          loadImagesSuccess({ images }),
        ),
        catchError(() => of(loadImagesFailure())),
    ))
  ));

  public uploadImage$ = createEffect(() => this.actions$.pipe(
    ofType(uploadImage),
    switchMap(({ imageData }) =>
      this.mediaRestService.uploadImage(imageData).pipe(
        map((image: ImageCard) =>
          uploadImageSuccess({ image })
        ),
        catchError(() => of(uploadImageFailure()))
      )
    ),
  ));

  public searchImages$ = createEffect(() => this.actions$.pipe(
    ofType(searchImages),
    switchMap(({ searchLabel }) =>
      this.mediaRestService.searchImages(searchLabel).pipe(
        map((searchImages: ImageCard[]) =>
          searchImagesSuccess({ searchImages })
        ),
        catchError(() => of(searchImagesFailure()))
      )
    ),
  ));
}
