import { Component, Input, ViewChild, AfterViewInit } from '@angular/core'
import { GiphyService } from '../../services/giphy.service'
import { setDynterval } from 'dynamic-interval'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss'],
  providers: [NgbCarouselConfig],
})

export class CarouselNavigationComponent implements AfterViewInit {
  @ViewChild('carousel') public carousel: any

  public images: string[] = []
  @Input() public interval = 10000
  @Input() public keyword = 'cat'
  @Input() public bgColor = '#9181e6'

  public initialized = false

  private _lastKeyword
  private _offset = 0
  private _gifAmount = 10

  constructor(private _giphyService: GiphyService) {
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

  public ngAfterViewInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.

    this.carousel.animation = false
    this.carousel.pauseOnHover = false
    this.carousel.pauseOnFocus = false
    this.carousel.showNavigationIndicators = false
    this.carousel.showNavigationArrows = false

    this.initialized = true

    this.carousel.focus()
  }
}
