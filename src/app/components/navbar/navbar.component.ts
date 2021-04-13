import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { LocalStorage } from 'ngx-webstorage'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  @LocalStorage('keyword')
  private _keyword: string

  public get keyword(): string {
    return this._keyword ?? environment.keyword
  }

  @Input() public set keyword(value) {
    this._keyword = value
  }

  constructor(private _router: Router) { }

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
}
