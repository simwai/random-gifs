import { Component, ViewChild, AfterViewInit } from '@angular/core'
import { setDynterval } from 'dynamic-interval'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'
import { LocalStorage } from 'ngx-webstorage'

import { GiphyService } from '../../services/giphy.service'
import { ModalService } from 'src/app/services/modal.service'

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss'],
  providers: [NgbCarouselConfig],
})

export class CarouselNavigationComponent implements AfterViewInit {
  @ViewChild('carousel') public carousel: any

  @LocalStorage()
  public interval: number

  @LocalStorage()
  public bgColor: string

  @LocalStorage()
  public keyword: string

  @LocalStorage()
  public fontColor: string

  public images: string[] = []

  private _lastKeyword: string
  private _offset = 0
  private _gifAmount = 10

  constructor(private _giphyService: GiphyService, private _modalService: ModalService) {
    this.fetchGifs()

    const config = { wait: this.interval }

    setDynterval(context => {
      this.fetchGifs()

      return { ...context, wait: this.interval }
    }, config)
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

  public openModal(): void {
    this._modalService.tryOpenModal(this)
  }

  public ngAfterViewInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.

    this.carousel.animation = false
    this.carousel.pauseOnHover = false
    this.carousel.pauseOnFocus = false
    this.carousel.showNavigationIndicators = false
    this.carousel.showNavigationArrows = false
    this.carousel.interval = 10000

    this.carousel.focus()
  }
}
