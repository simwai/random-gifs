import { Component, OnDestroy, OnInit } from '@angular/core'
import { LocalStorage } from 'ngx-webstorage'
import { Observable } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

import { environment } from 'src/environments/environment'
import { SlideshowService } from 'src/app/services/slideshow.service'

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss'],
  host: {
    class: 'h-full flex flex-col justify-center items-center'
  }
})
export class CarouselNavigationComponent {
  // public currentImage$: Observable<string>
  // public nextButton$: Observable<any>
  // public previousButton$: Observable<any>

  // private _gifAmount = 50
  // private _offset: number = 0

  constructor(
    public slideshowService: SlideshowService
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

  // public previous(): void {
    // if (this._gifService.images.length - 1 > 0) {
      // this._sharedService.previousButton$.next(true)
      // this._gifService.i--
  //   }
  // }

  // public next(): void {
    // this._sharedService.nextButton$.next(true)
    // this._gifService.i++
  // }
}
