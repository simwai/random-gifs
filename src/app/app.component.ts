import { CarouselNavigationComponent } from './components/carousel/carousel-navigation'
import { Component, ComponentRef, HostListener, Input, ViewChild } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // {static: false } is default
  @ViewChild('carousel') public carouselNav: CarouselNavigationComponent

  @Input() public isAlternative: boolean

  private _swipeCoord?: [number, number]
  private _swipeTime?: number

  constructor() { }

  public async swipe(event: TouchEvent, when: string): Promise<void> {
    const coord: [number, number] = [event.changedTouches[0].clientX, event.changedTouches[0].clientY]
    const time = new Date().getTime()

    if (!this.carouselNav) {
      return
    }

    if (when === 'start') {
      this._swipeCoord = coord
      this._swipeTime = time
    } else if (when === 'end') {
      const direction = [coord[0] - this._swipeCoord[0], coord[1] - this._swipeCoord[1]]
      const duration = time - this._swipeTime

      if (duration < 1000) { // Long enough
        if ((Math.abs(direction[0]) > 10 && (Math.abs(direction[1] * 3) < Math.abs(direction[0])))) { // Horizontal enough
          // Left swipe
          if (direction[0] < 0) {
            console.log('left swipe')

            this.carouselNav.next()
          }

          // Right swipe
          if (direction[0] > 0) {
            console.log('right swipe')

            this.carouselNav.prev()
          }
        }
      }
    }
  }

  public onActivate(event): void {
    this.carouselNav = event
  }
}
