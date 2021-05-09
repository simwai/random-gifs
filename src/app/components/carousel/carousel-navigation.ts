import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core'
import { LocalStorage, LocalStorageService } from 'ngx-webstorage'
import { GifService } from 'src/app/services/gif.service'

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
  @LocalStorage('bgColor') public bgColor: string

  public gifs: string[]
  public offset: number

  // public isKeywordNew = false
  private _gifAmount
  private _index: number
  private _intervalId: any

  constructor(
    private readonly _localStorageService: LocalStorageService,
    private readonly _gifService: GifService,
    private readonly _ngZone: NgZone,
    private readonly _cdRef: ChangeDetectorRef
  ) {}

  public get currentGif(): string {
    return this.gifs[this.index]
  }

  public get index(): number {
    return this._index
  }

  public set index(value: number) {
    this._index = value
    this._cdRef.detectChanges()
  }

  public loadGifs(): void {
    let keyword = this._localStorageService.retrieve('keyword')

    if (!keyword) {
      keyword = environment.keyword
    }

    console.log(keyword)
    this._gifService
      .getGifs(keyword, this._gifAmount, this.offset)
      .subscribe(data => {
        this.gifs = data
        this.restartInterval()
      })
  }

  public nextGif(): void {
    this.restartInterval()
    this.index++

    // if (this.index + 1 > this.gifs.length - 1) {
    //   this.loadGifs()
    // }

    console.log(this.index)
    // TODO check if gif is available
  }
  public ngOnInit(): void {
    this.gifs = []
    this.index = 0
    this.offset = 0
    this._gifAmount = 50

    this.loadGifs()
  }

  public previousGif(): void {
    this.restartInterval()
    this.index--

    // if (this.index - 1 < 0) {
    //   console.log(this.index)

    //   return
    // }

    console.log(this.index)
  }

  public restartInterval(): void {
    clearInterval(this._intervalId)

    // prevent change detection bottleneck
    // https://lukeliutingchun.medium.com/angular-performance-issue-caused-by-settimeout-and-setinterval-1a4a65c07be3
    this._ngZone.runOutsideAngular(() => {
      this._intervalId = setInterval(() => {
        this.index++
        console.log(this.index)
      }, this._localStorageService.retrieve('interval') ?? environment.interval * 1000)
    })
  }
}
