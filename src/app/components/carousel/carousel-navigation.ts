import { Component, OnInit } from '@angular/core'
import { LocalStorage } from 'ngx-webstorage'
import { promisify } from 'util'

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
export class CarouselNavigationComponent implements OnInit {
  public currentImage: string
  public images = []

  private _offset = 0
  private _gifAmount = 10

  private _lastKeyword: string
  private _slideshowCounter = 0
  private _pauseInterval: any
  private _pauseIntervalTimeout: any
  private _isSlideshowRunning = true

  constructor(private _giphyService: GiphyService) { }

  /* LocalStorage properties start */

  public get interval(): number {
    return this._interval ?? environment.interval * 1000
  }

  public get keyword(): string {
    return this._keyword ?? environment.keyword
  }

  @LocalStorage('bgColor')
  public bgColor: string

  @LocalStorage('interval')
  private _interval: number

  @LocalStorage('keyword')
  private _keyword: string

  /* LocalStorage properties end */

  public async fetchGifs(): Promise<void> {
    const response = await this._giphyService.getGif(this.keyword, this._gifAmount, this._offset).toPromise()

    // keyword not found
    if (response.data.length === 0) {
      throw new Error('fetchGif failed')
    }

    // attention!
    const imageUrls = response.data.map(item => item.images.original.url)

    if (this.keyword !== this._lastKeyword) {
      this.images = imageUrls
      this._slideshowCounter = 0
    } else {
      this.images = this.images.concat(imageUrls)
    }

    this._offset += this._gifAmount
    // TODO search better solution
    this._lastKeyword = this.keyword
  }

  public async previous(): Promise<void> {
    if (this._slideshowCounter > 1) {
      this._slideshowCounter--
      this.currentImage = this.images[this._slideshowCounter]
      await this.setTimeoutPromise(this.interval)
    }
  }

  public async next(fetchedNewImages = false): Promise<any> {
    if (!fetchedNewImages)  {
      this._slideshowCounter++
    }

    if (this.currentImage !== this.images[this._slideshowCounter]) {
      this.currentImage = this.images[this._slideshowCounter]
    }

    return this.setTimeoutPromise(this.interval)
  }

  private setTimeoutPromise(ms: number): Promise <any> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  public ngOnInit(): void {
    (async () => {
      await this.runSlideshow()
    })()
  }

  private async runSlideshow(): Promise<void> {
    while (this._isSlideshowRunning) {
      if (!this.images[this._slideshowCounter] || this._lastKeyword !== this.keyword) {
        try {
          await this.fetchGifs()
          await this.next(true)
        } catch (error) {
          this._isSlideshowRunning = false
          console.error('carousel fetchGifs from runSlideshow() failed => ' + error.message)
        }
      } else {
        await this.next()
      }
    }
  }
}
