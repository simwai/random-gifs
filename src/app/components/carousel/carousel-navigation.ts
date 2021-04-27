import { Component, OnInit } from '@angular/core'
import { LocalStorage } from 'ngx-webstorage'
import { Subject, Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'

import { environment } from 'src/environments/environment'
import { SlideshowService } from 'src/app/services/slideshow.service'
import { GifService as GifService } from 'src/app/services/gif.service'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss'],
  host: {
    class: 'h-full flex flex-col justify-center items-center'
  }
})
export class CarouselNavigationComponent implements OnInit {
  public currentImage$: Observable<string>

  private _gifAmount = 1
  private _offset: number
  private _index$: BehaviorSubject<number>

  constructor(
    private _gifService: GifService,
    private _slideshowService: SlideshowService
  ) { }

  /* LocalStorage properties start */

  @LocalStorage('bgColor')
  public bgColor: string

  public get interval(): number {
    return this._interval ?? environment.interval * 1000
  }

  public get keyword(): string {
    return this._keyword ?? environment.keyword
  }

  @LocalStorage('interval')
  private _interval: number

  @LocalStorage('keyword')
  private _keyword: string

  /* LocalStorage properties end */

  public previous(): void {

  }

  public next(): void {

  }

  public ngOnInit(): void {
    this._index$ = this._slideshowService.index$

    this.currentImage$ = this._index$.pipe(
      switchMap((slideNumber: number): Observable<string> =>
        this._gifService.getGif(this.keyword, this._gifAmount, slideNumber),
      ),
    )
  }

  // public async previous(): Promise<void> {
  //   this._slideshowService.previous()

  //   if (this._slideshowCounter > 1) {
  //     this._slideshowCounter--
  //     this.currentImage = this.images[this._slideshowCounter]
  //     await this.setTimeoutPromise(this.interval)
  //   }
  // }

  // public async next(fetchedNewImages = false): Promise<any> {
  //   this._slideshowService.next()

  //   if (!fetchedNewImages)  {
  //     this._slideshowCounter++
  //   }

  //   if (this.currentImage !== this.images[this._slideshowCounter]) {
  //     this.currentImage = this.images[this._slideshowCounter]
  //   }

  //   return this.setTimeoutPromise(this.interval)
  // }

  // private setTimeoutPromise(ms: number): Promise <any> {
  //   return new Promise(resolve => setTimeout(resolve, ms))
  // }

  // public ngOnInit(): void {
  //   (async () => {
  //     await this.runSlideshow()
  //   })()
  // }

  // private async runSlideshow(): Promise<void> {
  //   while (this._isSlideshowRunning) {
  //     if (!this.images[this._slideshowCounter] || this._lastKeyword !== this.keyword) {
  //       try {
  //         await this.fetchGifs()
  //         await this.next(true)
  //       } catch (error) {
  //         this._isSlideshowRunning = false
  //         console.error('carousel fetchGifs from runSlideshow() failed => ' + error.message)
  //       }
  //     } else {
  //       await this.next()
  //     }
  //   }
  // }
}
