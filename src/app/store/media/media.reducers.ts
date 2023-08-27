import {Action, createReducer} from "@ngrx/store";
import {initialMediaState, MediaState} from "./media.state";

const reducer = createReducer(
  initialMediaState,
);

export function mediaReducer(
  state: MediaState | undefined,
  action: Action
): MediaState {
  return reducer(state, action);
}
