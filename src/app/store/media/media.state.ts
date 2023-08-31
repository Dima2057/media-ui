import {ImageCard} from "../../image-card/image-card.model";

export interface MediaState {
  images: ImageCard[];
  searchImages: ImageCard[];
}

export const initialMediaState: MediaState = {
  images: [],
  searchImages: [],
};
