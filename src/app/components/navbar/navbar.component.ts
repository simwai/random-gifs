import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { LocalStorage, LocalStorageService } from 'ngx-webstorage'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() public readonly keywordChanged = new EventEmitter<string>()

  @LocalStorage('keyword') private _keyword: string

  constructor(
    private readonly _router: Router,
    private readonly _localStorageService: LocalStorageService
  ) {}

  public get keyword(): string {
    return this._keyword ?? environment.keyword
  }

  @Input() public set keyword(value) {
    if (this.keyword === value || !value) { return }

    this._keyword = value

    this.keywordChanged.emit(value)
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
