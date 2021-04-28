import { Injectable } from '@angular/core'
import { LocalStorageService } from 'ngx-webstorage'
import { BehaviorSubject } from 'rxjs'

import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public keyword$: BehaviorSubject<string>

  constructor(private _localStorageService: LocalStorageService) {
    const setKeyword = this._localStorageService.retrieve('keyword')
    this.keyword$ = new BehaviorSubject<string>(setKeyword ?? environment.keyword)
  }
}
