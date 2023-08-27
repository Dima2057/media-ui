import {Injectable} from "@angular/core";
import {
  Actions,
  createEffect,
  ofType,
} from "@ngrx/effects";
import {loadImages} from "./media.actions";

@Injectable()
export class MediaEffects {

  constructor(private actions$: Actions) {
  }

  public loadImages$ = createEffect(() => this.actions$.pipe(ofType(loadImages)));

}
