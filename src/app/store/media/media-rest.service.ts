import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {ImageCard} from "../../image-card/image-card.model";

@Injectable({
  providedIn: 'root',
})
export class MediaRestService {

  constructor(private http: HttpClient) {
  }

  public loadImages(): Observable<ImageCard[]> {
    return this.http.get<ImageCard[]>('http://54.197.205.8:8080/api/v1/media/images');
  }

  public uploadImage(selectedFile: FormData): Observable<ImageCard> {
    console.log(selectedFile);
    return this.http.post<ImageCard>('http://54.197.205.8:8080/api/v1/media/upload', selectedFile);
  }

  public searchImages(searchValue: string): Observable<ImageCard[]> {
    const url = 'http://54.197.205.8:8080/api/v1/media/images?label=' + searchValue;
    return this.http.get<ImageCard[]>(url);
  }
}
