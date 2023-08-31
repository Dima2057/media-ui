import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {ImageCard} from "../../image-card/image-card.model";

export const routesToBE = {
  host: "http://3.209.10.185:8080",
  apiVersion: "/api/v1",
  mediaService: "/media",
  upload: "/upload",
  images: "/images",
  search: "/images?label="
};

@Injectable({
  providedIn: 'root',
})
export class MediaRestService {

  constructor(private http: HttpClient) {
  }

  public loadImages(): Observable<ImageCard[]> {
    return this.http.get<ImageCard[]>(`${this.getApiUrl()}${routesToBE.images}`);
  }

  public uploadImage(selectedFile: FormData): Observable<ImageCard> {
    return this.http.post<ImageCard>(`${this.getApiUrl()}${routesToBE.upload}`, selectedFile);
  }

  public searchImages(searchValue: string): Observable<ImageCard[]> {
    return this.http.get<ImageCard[]>(`${this.getApiUrl()}${routesToBE.search}${searchValue}`);
  }

  private getApiUrl = (): string =>
    `${routesToBE.host}${routesToBE.apiVersion}${routesToBE.mediaService}`;
}
