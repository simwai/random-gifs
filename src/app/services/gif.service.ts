import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { map, tap } from 'rxjs/operators'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GifService {
  constructor(private http: HttpClient) { }

  public getGif(keyword: string, amount: number, offset: number): Observable<string> {
    const params = new HttpParams()
    params.set('api_key', environment.giphyApiKey)
    params.set('q', keyword)
    params.set('limit', amount.toString())
    params.set('rating', 'PG')
    params.set('offset', offset.toString())

    const response = this.http.get<any>('https://api.giphy.com/v1/gifs/search', { params })

    return response.pipe(
      tap((gifObject) => console.log(gifObject.data[0].images.original.url)),
      map((gifObject): string => gifObject.data[0].images.original.url)
    )
  }
}
