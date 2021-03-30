import { CarouselNavigationComponent } from './components/carousel/carousel-navigation'
import { Component, HostListener, ViewChild } from '@angular/core'

import { ModalService } from './services/modal.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // {static: false } is default
  @ViewChild(CarouselNavigationComponent) public carouselNav: CarouselNavigationComponent

  private _swipeCoord?: [number, number]
  private _swipeTime?: number

  constructor(private _modalService: ModalService) { }

  @HostListener('document:keypress', ['$event'])
  public async handleKeyboardEvent(event: KeyboardEvent): Promise<void> {
    if (event.key === 'Enter') {
      console.log('triggered in apps component')

      await this._modalService.tryOpenModal()
    }
  }

  public async swipe(e: TouchEvent, when: string): Promise<void> {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
    const time = new Date().getTime()

    if (when === 'start') {
      this._swipeCoord = coord
      this._swipeTime = time
    } else if (when === 'end') {
      const direction = [coord[0] - this._swipeCoord[0], coord[1] - this._swipeCoord[1]]
      const duration = time - this._swipeTime

      if (duration < 1000) { // Long enough
        if ((Math.abs(direction[0]) > 10  && (Math.abs(direction[0] * 3) < Math.abs(direction[1])))) { // Vertical enough
          // Up swipe
          if (direction[1] < 0) {
            console.log('swipe up')

            await this._modalService.tryOpenModal()
          }
        } else if ((Math.abs(direction[0]) > 10 && (Math.abs(direction[1] * 3) < Math.abs(direction[0])))) { // Horizontal enough
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
}
