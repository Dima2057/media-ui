import {AppState} from "../state";
import {createSelector, Selector} from "@ngrx/store";
import {ImageCard} from "../../image-card/image-card.model";

export const mediaState = (state: AppState) => state?.mediaState;

export const selectImages = (): Selector<AppState, ImageCard[]> =>
  createSelector(
    mediaState,
    (state): ImageCard[] => state?.images ?? [],
  );

export const selectSearchImages = (): Selector<AppState, ImageCard[]> =>
  createSelector(
    mediaState,
    (state): ImageCard[] => state?.searchImages ?? [],
  );
