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
  public noGifsFound = false
  public readonly gifBufferLength = 50
  private lastKeyword: string

  constructor(
    private readonly _http: HttpClient
  ) { }

  public reset(): void {
    this.gifs = []
    this.offset = 0
  }

  public getGifs(keyword: string): Observable<string[]> {
    if (this.lastKeyword !== keyword) {
      this.reset()
    }

    this.lastKeyword = keyword

    const response$ = this._http.get<any>(
      'https://api.giphy.com/v1/gifs/search?api_key='
      + environment.giphyApiKey + '&q=' + keyword + '&limit=' + this.gifBufferLength + '&rating=PG&offset=' + this.offset)

    const observer = response$.pipe(
      tap(gifObject => {
        console.log(gifObject)
        this.noGifsFound = gifObject.data.length === 0
      }),
      map((gifObject: any): string[] => {
        for (const value of gifObject.data) {
          const url = value.images.original.url as string
          // Check if the URL already exists in the array
          if (!this.gifs.includes(url)) {
            this.gifs.push(url)
          }
        }

        while (this.gifs.length > this.gifBufferLength) {
          this.gifs.shift()  // Remove the oldest image from the array
        }

        return this.gifs
      })
    )

    this.offset += this.gifBufferLength

    return observer
  }

}
