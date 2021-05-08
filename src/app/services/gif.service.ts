import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { concatMap, delay, map, mergeMap, take, tap } from 'rxjs/operators'
import { LocalStorageService } from 'ngx-webstorage'

import { environment } from '../../environments/environment'
import { from, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GifService {
  public images: string[] = []

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
        for (const value of gifObject.data) {
          this.images.push(value.images.original.url as string)
        }

        return this.images
      })
    )
    //   // convert image array to image stream
    //   mergeMap(result => from(result).pipe(
    //     concatMap(item => {
    //       return of(item).pipe(delay((this._localStorageService.retrieve('interval') ?? environment.interval * 1000)))
    //     })
    //   ))
    // )

    // observer.subscribe(data => console.log(data))

    return observer
  }
}
