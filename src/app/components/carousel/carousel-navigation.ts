import { Component, OnInit } from '@angular/core'
import { LocalStorage } from 'ngx-webstorage'
import pauseable from 'pauseable'

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

  private _config = { wait: this.interval }

  private _lastKeyword: string
  private _slideshowCounter = 0
  private _pauseInterval: any
  private _pauseIntervalTimeout: any

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

  public async fetchGifs(): Promise<any> {
    const response = await this._giphyService.getGif(this.keyword, this._gifAmount, this._offset).toPromise()

    // keyword not found
    if (response.data.length === 0) {
      return
    }

    // attention!
    const imageUrls = response.data.map(item => item.images.original.url)

    if (this.keyword !== this._lastKeyword) {
      this.images = imageUrls
      this._slideshowCounter = 0
    } else {
      this.images = imageUrls.concat(this.images)
    }

    this.images = this.images.concat(imageUrls)
    // this._slideshowCounter = 0
    this._offset += this._gifAmount
    this._lastKeyword = this.keyword
  }

  public async next(isPaused: boolean): Promise<void> {
    // if (isPaused) {
    //   this._pauseInterval.pause()
    // }

    if (!this.images[this._slideshowCounter] || this._lastKeyword !== this.keyword) {
      try {
        await this.fetchGifs()
      } catch (error) {
        console.error(error)
        this._pauseInterval.pause()
        return
      }
    } else {
      this.currentImage = this.images[this._slideshowCounter]
      this._slideshowCounter++
    }

    // else if (!isFirstExecute) {
    //   // can't increase the index on the first execute
    //   // TODO try to refactor the slideshowCounter stuff
    //   this._slideshowCounter++
    // }

    // if (isPaused) {
    //   if (this._pauseIntervalTimeout) {
    //     clearInterval(this._pauseIntervalTimeout)
    //   }

    //   this._pauseIntervalTimeout = setTimeout(() => {
    //     this._pauseInterval.resume()
    //   }, this.interval)
    // }
  }

  public previous(isPaused: boolean): void {
    // if (isPaused) {
    //   this._pauseInterval.pause()
    // }

    if (this._slideshowCounter > 1) {
      // TODO i need to keep all images to provide full previous featue
      this._slideshowCounter--
      this.currentImage = this.images[this._slideshowCounter]
    }

    // if (isPaused) {
    //   if (this._pauseIntervalTimeout) {
    //     clearInterval(this._pauseIntervalTimeout)
    //   }

    //   this._pauseIntervalTimeout = setTimeout(() => {
    //     this._pauseInterval.resume()
    //   }, this.interval)
    // }
  }

  public ngOnInit(): void {
    (async () => {
      if (this._interval) {
        this._config.wait = this.interval
      }

      try {
        await this.fetchGifs()
      } catch (error) {
        console.error(error)
        return
      }

      this.runSlideshow()
    })()
  }

  private runSlideshow(): void {
    this.next(false)

    this._pauseInterval = pauseable.setInterval(() => {
       console.log('trigger')
       this.next(false)
    }, this._config.wait )
  }
}
