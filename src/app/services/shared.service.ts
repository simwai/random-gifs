import { Injectable } from '@angular/core'
import { LocalStorageService } from 'ngx-webstorage'
import { BehaviorSubject } from 'rxjs'

import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public keyword$: BehaviorSubject<string>

  public previousButton$: BehaviorSubject<boolean>
  public nextButton$: BehaviorSubject<boolean>

  constructor(private _localStorageService: LocalStorageService) {
    const setKeyword = this._localStorageService.retrieve('keyword')
    this.keyword$ = new BehaviorSubject<string>(setKeyword ?? environment.keyword)
    this.previousButton$ = new BehaviorSubject<boolean>(false)
    this.nextButton$ = new BehaviorSubject<boolean>(false)
  }
}
