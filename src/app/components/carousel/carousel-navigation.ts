import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core'
import { LocalStorage, LocalStorageService } from 'ngx-webstorage'
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

  private _init: boolean

  constructor(
    private readonly _localStorageService: LocalStorageService,
    private readonly _gifService: GifService,
    private readonly _ngZone: NgZone,
    private readonly _cdRef: ChangeDetectorRef,
    private readonly _sharedVarsService: SharedVarsService
  ) {}

  // TODO check if behavior changes when i bind to a variable
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
    this._init = true

    this.gifs = []
    this.index = 0

    this.loadGifs()
  }

  public loadGifs(resetOffset?: boolean): void {
    let keyword = this._localStorageService.retrieve('keyword')

    if (!keyword) {
      keyword = environment.keyword
    }

    if (resetOffset) {
      this._gifService.offset = 0
    }

    console.log(keyword)
    this._gifService
      .getGifs(keyword)
      .subscribe(data => {
        if (this._init) {
          this.gifs = data
          this._init = false

          this.restartInterval()
          this._cdRef.detectChanges()
        } else {
          this.gifs = this.gifs.concat(data)

          this._cdRef.detectChanges()
        }
      }
    )
  }

  public nextGif(): void {
    // load gifs before the end is reached
    if (!this.gifs[this.index + 5]) {
      this.loadGifs()
    } else {
      this.restartInterval()
      this.index++
    }

    console.log(this.index)
  }

  public previousGif(): void {
    if ((this.index - 1) < 0) {
      console.log(this.index)

      return
    }

    this.restartInterval()
    this.index--

    console.log(this.index)
  }

  public restartInterval(): void {
    this._ngZone.runOutsideAngular(() => {
      if (this._intervalId) {
        clearInterval(this._intervalId)
      }

      this._intervalId = setInterval(() => {
          if (!this.gifs[this.index + 5]) {
            if (this._init) {
              console.log('error in setInterval')
            }

            this.loadGifs()
          }

          this.index++
          this._cdRef.detectChanges()

          console.log(this.index)
      }, this._localStorageService.retrieve('interval') ?? environment.interval * 1000)
    })
  }
}
