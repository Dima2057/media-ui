import { ActionReducerMap } from "@ngrx/store";
import {AppState} from "./state";
import {mediaReducer} from "./media/media.reducers";

/**
 * Use alphabetical order for reducers
 */
export const appReducers: ActionReducerMap<AppState> = {
  mediaState: mediaReducer,
}
