import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  constructor(private http: HttpClient) { }

  public getGif(keyword: string, amount: number, offset: number): Observable<any> {
    return this.http.get<any>('https://api.giphy.com/v1/gifs/search?api_key='
    + environment.giphyApiKey + '&q=' + keyword + '&limit=' + amount + '&rating=PG&offset=' + offset)
  }

}
