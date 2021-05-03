import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { concatMap, delay, map, mergeMap, tap } from 'rxjs/operators'
import { LocalStorageService } from 'ngx-webstorage'

import { environment } from '../../environments/environment'
import { from, of } from 'rxjs'
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn'

@Injectable({
  providedIn: 'root'
})
export class GifService {
  constructor(
    private _http: HttpClient,
    private _localStorageService: LocalStorageService
  ) { }

  public getGifs(keyword: string, amount: number, offset: number): Observable<string[]> {
    const response$ = this._http.get<any>(
      'https://api.giphy.com/v1/gifs/search?api_key='
    + environment.giphyApiKey + '&q=' + keyword + '&limit=' + amount + '&rating=PG&offset=' + offset)

    const observer = response$.pipe(
      tap(gifObject => console.log(gifObject)),
      map((gifObject: any): string[] => {
        const images = []

        for (const value of gifObject.data) {
          images.push(value.images.original.url)
        }

        return images
      }),
      // mergeMap(result => from(result).pipe(
      //     concatMap(item => {
      //       return of(item).pipe(delay((this._localStorageService.retrieve('interval') ?? environment.interval * 1000)))
      //     })
      //   )
      // )
    )

    // observer.subscribe(imageUrl => console.log(imageUrl))

    return observer
  }
}
