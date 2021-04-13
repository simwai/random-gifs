import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'
import { setDynterval } from 'dynamic-interval'
import { LocalStorage, LocalStorageService } from 'ngx-webstorage'

import { environment } from 'src/environments/environment'
import { GiphyService } from 'src/app/services/giphy.service'

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss'],
  providers: [
    NgbCarouselConfig
  ],
  host: {
    class: 'h-100 flex flex-col justify-center items-center'
  },
  animations: [
    trigger('slideDown', [
      // element which slides down is open
      state('opened', style({  })),

      // element which slides down is closed
      state('closed', style({ transform: 'translateY(150%)' })),

      transition('opened => closed', [
        animate('1s'),
      ]),
      transition('closed => opened', [
        animate('1s')
      ])
    ])
  ]})

export class CarouselNavigationComponent implements OnDestroy, OnInit {
  @ViewChild('carousel') public carousel: any

  public images: string[] = []

  private _lastKeyword: string
  private _offset = 0
  private _gifAmount = 10

  private _dynterval

  constructor(
    private _giphyService: GiphyService,
    private _localStorageService: LocalStorageService
  ) {
    this.fetchGifs()

    // TODO maybe 10000 is not correct, could depend on view duration
    const config = { wait: 10000 }

    this._dynterval = setDynterval(context => {
      this.fetchGifs()

      return { ...context, wait: 10000 }
    }, config)
  }

  @LocalStorage('interval')
  private _interval: number

  public get interval(): number {
    return this._interval ?? environment.interval
  }

  public set interval(value) {
    this._interval = value
  }

  @LocalStorage('keyword')
  private _keyword: string

  public get keyword(): string {
    return this._keyword ?? environment.keyword
  }

  public fetchGifs(): void {
    this._giphyService.getGif(this.keyword, this._gifAmount, this._offset).subscribe(response => {
      if (this._lastKeyword !== this.keyword) {
        this.images = []
      }

      this._lastKeyword = this.keyword

      // keyword not found
      if (response.data.length === 0) {
        return
      }

      response.data.forEach(element => {
        this.images.push(element.images.original.url)
      })
    }, error => {
      console.log(error)
    })

    this._offset += this._gifAmount
  }

  public next(): void {
    this.carousel.next()
  }

  public prev(): void {
    this.carousel.prev()
  }

  public showGuide(): void { }

  public showSettings(): void { }

  public ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.

    const bgColor = this._localStorageService.retrieve('bgColor')

    if (bgColor) {
      document.documentElement.style.setProperty('--bg-color', bgColor)
    }
  }

  public ngOnDestroy(): void {
    if (this._dynterval) {
      this._dynterval.clear()
    }
  }
}
