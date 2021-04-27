import { Injectable } from '@angular/core'
import { LocalStorageService } from 'ngx-webstorage'
import { BehaviorSubject, merge, Observable } from 'rxjs'
import { Subject } from 'rxjs/internal/Subject'

import { environment } from 'src/environments/environment'
import { GifService } from './gif.service'

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {
  public index$ = new BehaviorSubject<number>(0)

  constructor(private _localStorageService: LocalStorageService) {
    const interval = this._localStorageService.retrieve('interval') ?? environment.interval * 1000

    setInterval(() => {
      this.index$.next(this.index$.value + 1)
    }, interval)
  }
}
