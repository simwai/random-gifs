import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core'
import { LocalStorage, LocalStorageService } from 'ngx-webstorage'
import { BehaviorSubject, Observable } from 'rxjs'
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn'
import { switchMap } from 'rxjs/operators'
import { GifService } from 'src/app/services/gif.service'
import { SharedVarsService } from 'src/app/services/shared-vars.service'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss'],
  host: {
    class: 'h-full flex flex-col justify-center items-center'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselNavigationComponent implements OnInit {
  // TODO Fix update problem for bgColor, changedetection, pass value from settingsComponent on bgColor set to bgColor$ in sharedVars
  // first look in old commits, should have worked before
  @LocalStorage('bgColor') public bgColor: string

  public gifs: string[]

  // public isKeywordNew = false
  private _index: number
  private _intervalId: any

  constructor(
    private readonly _localStorageService: LocalStorageService,
    private readonly _gifService: GifService,
    private readonly _ngZone: NgZone,
    private readonly _cdRef: ChangeDetectorRef,
    private readonly _sharedVarsService: SharedVarsService
  ) {}

  @Input() public get currentGif(): string {
    console.log(this.gifs[this.index])

    return this.gifs[this.index]
  }

  public get index(): number {
    return this._index
  }

  public set index(value: number) {
    this._index = value
    this._cdRef.detectChanges()
  }

  public ngOnInit(): void {
    this.gifs = []
    this.index = 0
    this.loadGifs()

    // this._sharedVarsService.index$.subscribe(data => {
    //   this._index = data
    // })
  }

  public loadGifs(): void {
    let keyword = this._localStorageService.retrieve('keyword')

    if (!keyword) {
      keyword = environment.keyword
    }

    // TODO convert to promised in gifservice
    console.log(keyword)
    this._gifService
      .getGifs(keyword)
      .subscribe(data => {
        this.gifs = data
        this.restartInterval()
        this._cdRef.detectChanges()
      }
    )
  }

  public nextGif(): void {
    // if ((this.index + 1) > (this.gifs.length - 1)) {
    //   this.loadGifs()
    // } else {
    //   this.index++
    //   this.restartInterval()
    // }

    this.restartInterval()
    this.index++

    // this._sharedVarsService.index$.next(this._sharedVarsService.index$.value + 1)

    console.log(this.index)
  }

  public previousGif(): void {
    // if ((this.index - 1) < 0) {
    //   console.log(this.index)

    //   return
    // }

    this.restartInterval()
    this.index--
    // this._sharedVarsService.index$.next(this._sharedVarsService.index$.value - 1)

    console.log(this.index)
  }

  public restartInterval(): void {

    // // prevent change detection bottleneck
    // // https://lukeliutingchun.medium.com/angular-performance-issue-caused-by-settimeout-and-setinterval-1a4a65c07be3
    // this._ngZone.runOutsideAngular(() => {
    //   this._intervalId = setInterval(() => {
    //     this.index++
    //     // this._sharedVarsService.index$.next(this._sharedVarsService.index$.value + 1)
    //     console.log(this.index)
    //   }, this._localStorageService.retrieve('interval') ?? environment.interval * 1000)
    // })

    this._ngZone.runOutsideAngular(() => {
      if (this._intervalId) {
        clearInterval(this._intervalId)
      }

      this._intervalId = setInterval(() => {
        this.index++
        // this._sharedVarsService.index$.next(this._sharedVarsService.index$.value + 1)
        console.log(this.index)
      }, this._localStorageService.retrieve('interval') ?? environment.interval * 1000)
    })
  }
}
