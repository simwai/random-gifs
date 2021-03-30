import { Component, ViewChild, AfterViewInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core'
import { setDynterval } from 'dynamic-interval'
import { NgbCarouselConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { LocalStorage } from 'ngx-webstorage'

import { environment } from 'src/environments/environment'
import { GiphyService } from 'src/app/services/giphy.service'
import { ModalService } from 'src/app/services/modal.service'
import { ShepherdService } from 'angular-shepherd'
import { shepherdConfig } from './shepherd-config.js'

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss'],
  providers: [NgbCarouselConfig],
})

export class CarouselNavigationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carousel') public carousel: any

  @LocalStorage('interval')
  private _interval: number

  public get interval(): number {
    return this._interval ?? environment.interval
  }

  public set interval(value) {
    this._interval = value
  }

  @LocalStorage('bgColor')
  private _bgColor: string

  public get bgColor(): string {
    return this._bgColor ?? environment.bgColor
  }

  public set bgColor(value: string) {
    this._bgColor = value
  }


  @LocalStorage('keyword')
  private _keyword: string


  public get keyword(): string {
    return this._keyword ?? environment.keyword
  }

  @LocalStorage()
  public fontColor: string

  public images: string[] = []

  private _lastKeyword: string
  private _offset = 0
  private _gifAmount = 10

  private _dynterval

  constructor(private _giphyService: GiphyService, private _modalService: ModalService, private _shepherdService: ShepherdService) {
    this.fetchGifs()

    // TODO maybe 10000 is not correct, could depend on view duration
    const config = { wait: 10000 }

    this._dynterval = setDynterval(context => {
      this.fetchGifs()

      return { ...context, wait: 10000 }
    }, config)
  }

  public fetchGifs(): void {
    this._giphyService.getGif(this.keyword, this._gifAmount, this._offset).subscribe(response => {
      // TODO do this at modal close
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

  public async openModal(): Promise<void> {
    await this._modalService.tryOpenModal()
  }

  public ngAfterViewInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.

    if (this.carousel) {
      this.carousel.animation = false
      this.carousel.pauseOnHover = false
      this.carousel.pauseOnFocus = false
      this.carousel.showNavigationIndicators = false
      this.carousel.showNavigationArrows = false
    }

    this._shepherdService.defaultStepOptions = shepherdConfig.defaultStepOptions
    this._shepherdService.modal = true
    this._shepherdService.confirmCancel = false
    this._shepherdService.addSteps(shepherdConfig.defaultSteps)
    this._shepherdService.start()
  }

  public ngOnDestroy(): void {
    if (this._dynterval) {
      this._dynterval.clear()
    }
  }
}
