import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LocalStorage, LocalStorageService } from 'ngx-webstorage'
import { SharedVarsService } from 'src/app/services/shared-vars.service'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @LocalStorage('keyword') private _keyword: string

  constructor(
    private readonly _router: Router,
    private readonly _localStorageService: LocalStorageService,
    private readonly _sharedVarsService: SharedVarsService
  ) {}

  public get keyword(): string {
    return this._keyword ?? environment.keyword
  }

  public set keyword(value) {
    if (this.keyword === value) { return }

    this._keyword = value
    // TODO fix this
    // this._slideshowService.index = 0
    // this._slideshowService.offset = 0
    // this._slideshowService.loadGifs()

    // this._sharedVarsService.index$.next(0)
    // this._sharedVarsService.keyword$.next(value)
  }

  public isAlternative(): boolean {
    const currentPage = this._router.url

    if (currentPage === '/guide') {
      return true
    }

    if (currentPage === '/settings') {
      return true
    }

    if (currentPage  === '/carousel') {
      return false
    }

    return false
  }

  public ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.

    const bgColor = this._localStorageService.retrieve('bgColor')

    if (bgColor) {
      document.documentElement.style.setProperty('--bg-color', bgColor)
    }
  }
}
