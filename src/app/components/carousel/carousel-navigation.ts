import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core'
import { setDynterval } from 'dynamic-interval'
import { LocalStorage } from 'ngx-webstorage'

import { environment } from 'src/environments/environment'
import { GiphyService } from 'src/app/services/giphy.service'

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss'],
  host: {
    class: 'h-full flex flex-col justify-center items-center'
  }
})
export class CarouselNavigationComponent implements OnDestroy, OnInit {

  constructor(private _giphyService: GiphyService) { }

  public get interval(): number {
    return this._interval ?? environment.interval * 1000
  }

  public get keyword(): string {
    return this._keyword ?? environment.keyword
  }
  @LocalStorage('bgColor')
  public bgColor: string

  private _offset = 0
  private _gifAmount = 10

  public currentImage: string
  public images = new Set()
  private _slideshowCounter: number = 0

  private _dynterval
  // TODO maybe 10000 is not correct, could depend on view duration
  private _dyntervalConfig = { wait: 10000 }
  private _isDyntervalPaused: boolean = false

  @LocalStorage('interval')
  private _interval: number

  @LocalStorage('keyword')
  private _keyword: string

  private _pauseIntervalTimeout: any

  public async fetchGifs(): Promise<any> {
    const response = await this._giphyService.getGif(this.keyword, this._gifAmount, this._offset).toPromise()

    // keyword not found
    if (response.data.length === 0) {
      return
    }

    const mapResponse = response.data.map(item => item.images.original.url)
    const forSet = [...this.images].concat(mapResponse)
    this.images = new Set(forSet)

    this._offset += this._gifAmount
  }

  public async next(): Promise<void> {
    this.pauseDynterval()

    if (this._slideshowCounter === this.images.size) {
      await this.fetchGifs()
    }

    this.currentImage = Array.from(this.images)[this._slideshowCounter] as string
    this._slideshowCounter++
  }

  public previous(): void {
    this.pauseDynterval()

    this.currentImage = Array.from(this.images)[this._slideshowCounter] as string

    if (this._slideshowCounter > 1) {
      this._slideshowCounter--
    }
  }

  public pauseDynterval(): void {
    this._isDyntervalPaused = true

    if (this._pauseIntervalTimeout) {
      clearTimeout(this._pauseIntervalTimeout)
    }

    this._pauseIntervalTimeout = setTimeout(() => {
      this._isDyntervalPaused = false
    }, this.interval * 2)
  }

  // will not get triggered because of reroute strategy
  public ngOnDestroy(): void {
    if (this._dynterval) {
      this._dynterval.clear()
    }
  }

  public ngOnInit(): void {
    (async () => {
      try {
        await this.fetchGifs()
      } catch (error) {
        console.error(error)
        return
      }

      this.next()

      if (this._interval) {
        this._dyntervalConfig.wait = this._interval
      }

      this._dynterval = setDynterval(context => {
        if (!this._isDyntervalPaused) {
          this.next()
        }

        return { ...context, wait: this._dyntervalConfig.wait }
      }, this._dyntervalConfig)
    })()
  }
}
