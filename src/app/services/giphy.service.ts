import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import KeyData from '../api-key.json'

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  getGif(keyword: string, amount: number, offset: number): Observable<any> {
    return this.http.get<any>('https://api.giphy.com/v1/gifs/search?api_key=' + KeyData.api_key + '&q=' + keyword + '&limit=' + amount + '&rating=PG&offset=' + offset)
  }

}
