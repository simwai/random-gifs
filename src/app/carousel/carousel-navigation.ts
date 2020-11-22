import { Component, Input, SimpleChanges, HostListener } from '@angular/core'
import { GiphyService } from '../services/giphy.service'
import { setDynterval } from 'dynamic-interval'

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss']
})
export class NgbdCarouselNavigationComponent {
  public images: string[] = []
  @Input() public interval = 10000
  @Input() public keyword = 'cat'

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

      response.data.forEach(element => {
        this.images.push(element.images.original.url)
      })
    })

    this._offset += this._gifAmount
  }
}
