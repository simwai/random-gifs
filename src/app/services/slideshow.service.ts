import { Injectable } from '@angular/core'
import { LocalStorageService } from 'ngx-webstorage'
import { BehaviorSubject, merge, Observable, ReplaySubject } from 'rxjs'
import { Subject } from 'rxjs/internal/Subject'

import { environment } from 'src/environments/environment'
import { GifService } from './gif.service'

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {
  private _carouselActive: boolean
  private readonly _gifAmount = 50
  private _images: string[]

  private _index: number
  private _intervalId: any
  private readonly _offset = 0
  // public index$: BehaviorSubject<number>
  // public length$: ReplaySubject<number>

  constructor(
  private readonly _localStorageService: LocalStorageService,
  private readonly _gifService: GifService
) {
  this._images = []
  this._carouselActive = true
  this._index = 0

  this.loadGifs()
    // const interval = this._localStorageService.retrieve('interval') ?? environment.interval * 1000
    // this.index$ = new BehaviorSubject<number>(interval)
    // this.length$ = new ReplaySubject<number>(1)

    // setInterval(() => {
    //   this.index$.next(this.index$.value + 1)
    // }, interval)
  }

  public get currentGif(): string {
    return this._images[this._index]
  }

  public loadGifs(): void {
    this._gifService
      .getGifs(this._localStorageService.retrieve('keyword') ?? environment.keyword, this._gifAmount, this._offset)
      .subscribe(data => {
        this._images = data
        this.restartInterval()
      })
  }

  public nextGif(): void {
    this._carouselActive = true
    this.restartInterval()
    this._index++
    // TODO check if gif is available
  }

  public previousGif(): void {
    this.restartInterval()
    this._carouselActive = false
    this._index--
  }

  public restartInterval(): void {
    clearInterval(this._intervalId)
    if (this._carouselActive) {
      this._intervalId = setInterval(() => { this._index++; console.log(this._index)}, 2000)
    }
  }
}
