import { Component, OnDestroy, OnInit } from '@angular/core'
import { LocalStorage } from 'ngx-webstorage'
import { Observable } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { SharedService } from 'src/app/services/shared.service'

import { environment } from 'src/environments/environment'
import { SlideshowService } from 'src/app/services/slideshow.service'
import { GifService } from 'src/app/services/gif.service'

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss'],
  host: {
    class: 'h-full flex flex-col justify-center items-center'
  }
})
export class CarouselNavigationComponent implements OnInit, OnDestroy {
  public currentImage$: Observable<string>
  public carousel$: Observable<string[]>

  public nextButton$: Observable<any>
  public previousButton$: Observable<any>

  private _gifAmount = 50
  private _offset: number = 0

  // private _previousButton$: BehaviorSubject<boolean>
  // private _nextButton$: BehaviorSubject<boolean>

  constructor(
    private _gifService: GifService,
    private _slideshowService: SlideshowService,
    private _sharedService: SharedService
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

    if (this._gifService.images.length - 1 > 0) {
      // this._sharedService.previousButton$.next(true)
      // this._gifService.i--
    }
  }

  public next(): void {
    // this._sharedService.nextButton$.next(true)
    // this._gifService.i++
  }

  public ngOnInit(): void {
    const observer = this._sharedService.keyword$.pipe(
      switchMap((keyword: string): Observable<string> => {
        return this._gifService.getGifs(keyword, this._gifAmount, this._offset)
      }),
      tap(imgUrls => {
        console.log(imgUrls)
        this._slideshowService.length$.next(imgUrls.length)
        this._offset++
      })
    )

    this.currentImage$ = observer
  }

  public ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.

    this._sharedService.keyword$.unsubscribe()
    this._sharedService.previousButton$.unsubscribe()
    this._sharedService.nextButton$.unsubscribe()
  }
}
