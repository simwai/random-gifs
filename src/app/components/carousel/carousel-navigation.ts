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

  public loadGifs(): void {
    let keyword = this._localStorageService.retrieve('keyword')

    if (!keyword) {
      keyword = environment.keyword
    }

    console.log(keyword)
    this._gifService
      .getGifs(keyword)
      .subscribe(data => {
        // TODO if init overwrite instead concat
        if (this._init) {
          this.gifs = data
          this._init = false
        } else {
          this.gifs = this.gifs.concat(data)
        }

        // this.gifs = this._init ? data : this.gifs.concat(data)

        // TODO is this interval correct?
        this.restartInterval()
        this._cdRef.detectChanges()
      }
    )
  }

  public nextGif(): void {
    // load gifs before the end is reached
    if (!this.gifs[this.index + 5]) {
      this.loadGifs()
    }

    this.restartInterval()
    this.index++

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
    // TODO maybe not the correct position, maybe makes other code obsolete
    // if (this._init) {
    //   // this.index = 0
    //   this._init = false
    // }

    this._ngZone.runOutsideAngular(() => {
      if (this._intervalId) {
        clearInterval(this._intervalId)
      }

      this._intervalId = setInterval(() => {
        this._ngZone.run(() => {
          // if (!this.gifs[this.index + 1]) {
          //   this.loadGifs()
          // }
          if (!this.gifs[this.index + 5]) {
            this.loadGifs()
          }

          this.index++
        })

        console.log(this.index)
      }, this._localStorageService.retrieve('interval') ?? environment.interval * 1000)
    })
  }
}
