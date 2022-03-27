import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable'
import { map, tap } from 'rxjs/operators'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GifService {
  public gifs: string[] = []
  public offset = 0
  private readonly _gifAmount: number = 50
  private lastKeyword: string

  constructor(
    private readonly _http: HttpClient
  ) {}

  public getGifs(keyword: string, gifAmount?: number): Observable<string[]> {
    if (this.lastKeyword !== keyword) {
      this.gifs = []
      this.offset = 0
    }

    this.lastKeyword = keyword

    const response$ = this._http.get<any>(
      'https://api.giphy.com/v1/gifs/search?api_key='
    + environment.giphyApiKey + '&q=' + keyword + '&limit=' + (gifAmount ?? this._gifAmount) + '&rating=PG&offset=' + this.offset)

    const observer = response$.pipe(
      tap(gifObject =>
        console.log(gifObject)
      ),
      map((gifObject: any): string[] => {
        for (const value of gifObject.data) {
          this.gifs.push(value.images.original.url as string)
        }

        // TODO string[] to set, i wanna avoid duplicates!!
        return this.gifs
      })
    )

    this.offset += gifAmount ?? this._gifAmount

    return observer
  }
}
