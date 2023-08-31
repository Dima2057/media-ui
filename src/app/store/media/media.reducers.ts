import {Action, createReducer, on} from "@ngrx/store";
import {initialMediaState, MediaState} from "./media.state";
import {loadImagesSuccess, searchImagesSuccess, uploadImageSuccess} from "./media.actions";

const reducer = createReducer(
  initialMediaState,
  on(
    loadImagesSuccess,
    (state, {images}): MediaState => ({
      ...state,
      images: images,
    })
  ),
  on(
    uploadImageSuccess,
    (state, {image}): MediaState => ({
      ...state,
      images: [
        ...state.images,
        image,
      ]
    })
  ),
  on(
    searchImagesSuccess,
    (state, {searchImages}): MediaState => ({
      ...state,
      searchImages: searchImages,
    })
  ),
);

export function mediaReducer(
  state: MediaState | undefined,
  action: Action
): MediaState {
  return reducer(state, action);
}
