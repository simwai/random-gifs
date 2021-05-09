import { Injectable, NgZone } from '@angular/core'
import { LocalStorageService } from 'ngx-webstorage'

import { environment } from 'src/environments/environment'
import { GifService } from './gif.service'

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {
  public gifs: string[]
  public index: number
  public offset: number
  // public isKeywordNew = false
  private readonly _gifAmount
  private _intervalId: any

  constructor(
    private readonly _localStorageService: LocalStorageService,
    private readonly _gifService: GifService,
    private readonly _ngZone: NgZone
  ) {
    this.gifs = []
    this.index = 0
    this.offset = 0
    this._gifAmount = 50

    this.loadGifs()
  }

  public get currentGif(): string {
    return this.gifs[this.index]
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
