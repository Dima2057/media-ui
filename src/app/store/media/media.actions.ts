import {createAction, props} from "@ngrx/store";
import {ImageCard} from "../../image-card/image-card.model";

const enum Action {
  LoadImages = "[Media] Load Images",
  LoadImagesSuccess = "[Media] Load Images Success",
  LoadImagesFailure = "[Media] Load Images Failure",
  UploadImage = "[Media] Upload Image",
  UploadImageSuccess = "[Media] Upload Image Success",
  UploadImageFailure = "[Media] Upload Image Failure",
  SearchImages = "[Media] Search Images",
  SearchImagesSuccess = "[Media] Search Images Success",
  SearchImagesFailure = "[Media] Search Images Failure",
}

export const loadImages = createAction(
  Action.LoadImages,
);

export const loadImagesSuccess = createAction(
  Action.LoadImagesSuccess,
  props<{ images: ImageCard[] }>(),
);

export const loadImagesFailure = createAction(
  Action.LoadImagesFailure,
);

export const uploadImage = createAction(
  Action.UploadImage,
  props<{ imageData: FormData }>(),
);

export const uploadImageSuccess = createAction(
  Action.UploadImageSuccess,
  props<{ image: ImageCard }>(),
);

export const uploadImageFailure = createAction(
  Action.UploadImageFailure,
);

export const searchImages = createAction(
  Action.SearchImages,
  props<{ searchLabel: string }>(),
);

export const searchImagesSuccess = createAction(
  Action.SearchImagesSuccess,
  props<{ searchImages: ImageCard[] }>(),
);

export const searchImagesFailure = createAction(
  Action.SearchImagesFailure,
);
