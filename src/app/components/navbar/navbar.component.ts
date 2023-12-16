import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { LocalStorage, LocalStorageService } from 'ngx-webstorage'
import { fromEvent, Subscription } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() public readonly keywordChanged = new EventEmitter<string>()
  @ViewChild('searchInput') public searchInput: ElementRef
  private subscriptions = new Subscription()

  @LocalStorage('keyword') private _keyword: string

  constructor(
    private readonly _router: Router,
    private readonly _localStorageService: LocalStorageService
  ) { }

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

    if (currentPage === '/carousel') {
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

  public ngAfterViewInit(): void {
    this.subscriptions.add(
      fromEvent(this.searchInput.nativeElement, 'keyup')
        .pipe(
          map((event: any) => event.target.value),
          debounceTime(3000)
        )
        .subscribe(search => {
          this.keyword = search
        })
    )

    this.subscriptions.add(
      fromEvent(this.searchInput.nativeElement, 'blur')
        .pipe(map((event: any) => event.target.value))
        .subscribe(search => {
          this.keyword = search
        })
    )
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
