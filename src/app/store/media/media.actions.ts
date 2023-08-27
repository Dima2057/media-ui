import {createAction} from "@ngrx/store";

const enum Action {
  LoadImages = "[Media] Load Images",
  LoadImagesSuccess = "[Media] Load Images success",
  LoadImagesFailure = "[Media] Load Images failure",
}

export const loadImages = createAction(
  Action.LoadImages,
);

export const loadImagesSuccess = createAction(
  Action.LoadImagesSuccess,
);

export const loadImagesFailure = createAction(
  Action.LoadImagesFailure,
);
