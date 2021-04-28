import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LocalStorage, LocalStorageService } from 'ngx-webstorage'
import { BehaviorSubject } from 'rxjs'
import { SharedService } from 'src/app/services/shared.service'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public get keyword(): string {
    return this._keyword ?? environment.keyword
  }

  @Input() public set keyword(value) {
    this._keyword = value

    this._sharedService.keyword$.next(value)
  }

  @LocalStorage('keyword')
  private _keyword: string

  constructor(
    private _router: Router,
    private _localStorageService: LocalStorageService,
    private _sharedService: SharedService
  ) { }

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

