import { Injectable } from '@angular/core'
import { LocalStorageService } from 'ngx-webstorage'
import { BehaviorSubject } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SharedVarsService {
  public index$: BehaviorSubject<number>
  public keyword$: BehaviorSubject<string>

  constructor(private readonly _localStorageService: LocalStorageService) {
    this.index$ = new BehaviorSubject <number> (0)

    let keyword = this._localStorageService.retrieve('keyword')

    // TODO shorten this
    if (!keyword) {
      keyword = environment.keyword
    }

    this.keyword$ = new BehaviorSubject<string>(keyword)
  }
}
