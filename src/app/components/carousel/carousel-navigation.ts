import { Component, OnDestroy, OnInit } from '@angular/core'
import { LocalStorage } from 'ngx-webstorage'
import { Subject, Observable, ReplaySubject, from, of } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators'
import { SharedService } from 'src/app/services/shared.service'
import { BehaviorSubject } from 'rxjs'

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

  private _gifAmount = 50
  private _offset: number = 0
  private _index$: BehaviorSubject<number>

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

  }

  public next(): void {

  }

  public ngOnInit(): void {
    this._index$ = this._slideshowService.index$

    // TODO check if it works on save and oninit
    const keywordObserver$: Observable<string> = this._sharedService.keyword$.pipe(
      switchMap((keyword: string): Observable<string> => {
        return this._gifService.getGifs(keyword, this._gifAmount, this._offset)
      }),
      tap(imgUrls => {
        console.log(imgUrls)
        this._slideshowService.length$.next(imgUrls.length)
        this._offset++
      })
    )

    this.currentImage$ = keywordObserver$
  }

  public ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.

    this._sharedService.keyword$.unsubscribe()
  }
}
