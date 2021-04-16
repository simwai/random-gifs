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
    class: 'h-100 flex flex-col justify-center items-center'
  }
})

export class CarouselNavigationComponent implements OnDestroy, OnInit {
  @LocalStorage('bgColor')
  public bgColor: string

  @ViewChild('carousel')
  public carousel: any

  public currentImage: string

  private _offset = 0
  private _gifAmount = 1

  private _dynterval

  constructor(private _giphyService: GiphyService) { }

  @LocalStorage('interval')
  private _interval: number

  public get interval(): number {
    return this._interval ?? environment.interval * 1000
  }

  public set interval(value) {
    this._interval = value
  }

  @LocalStorage('keyword')
  private _keyword: string

  public get keyword(): string {
    return this._keyword ?? environment.keyword
  }

  public fetchGifs(changeOffset: boolean = false): void {
    this._giphyService.getGif(this.keyword, this._gifAmount, this._offset).subscribe(response => {
      // keyword not found
      if (response.data.length === 0) {
        return
      }

      response.data.forEach(element => {
        this.currentImage = element.images.original.url
      })
    })

    if (changeOffset) {
      this._offset += this._gifAmount
    }
  }

  public next(): void {
    this.currentImage = ''
    this._offset += this._offset >= 0 ? 1 : 0
    this.fetchGifs();
  }

  public prev(): void {
    this.currentImage = ''
    this._offset -= this._offset > 0 ? 1 : 0
    this.fetchGifs();
  }

  // will not get triggered because of reroute strategy
  public ngOnDestroy(): void {
    if (this._dynterval) {
      this._dynterval.clear()
    }
  }

  public ngOnInit(): void {
    this.fetchGifs(true)

    // TODO maybe 10000 is not correct, could depend on view duration
    const config = { wait: 10000 }

    this._dynterval = setDynterval(context => {
      this.fetchGifs(true)

      return { ...context, wait: 10000 }
    }, config)
  }
}
