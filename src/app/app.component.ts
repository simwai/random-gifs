import { CarouselNavigationComponent } from './components/carousel/carousel-navigation'
import { Component, HostListener, ViewChild } from '@angular/core'
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'

import { SettingsComponent } from './settings/settings.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // {static: false } is default
  @ViewChild(CarouselNavigationComponent) public carouselNav: CarouselNavigationComponent

  private _isModalVisible: boolean = false
  private _swipeCoord?: [number, number]
  private _swipeTime?: number
  private _modalRef: NgbModalRef

  private readonly ngbModalOptions = {
    centered: true,
    size: 'sm'
  }

  constructor(private _modal: NgbModal) { }

  @HostListener('document:keypress', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      const options: NgbModalOptions = this.ngbModalOptions
      this._modalRef = this._modal.open(SettingsComponent, options)

      if (!this._isModalVisible) {
        this.updateDiashowParameters(this._modalRef)
      }

      this._isModalVisible = !this._isModalVisible
    }
  }

  public swipe(e: TouchEvent, when: string): void {
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

            const options: NgbModalOptions = this.ngbModalOptions
            this._modalRef = this._modal.open(SettingsComponent, options)

            if (!this._isModalVisible) {
              this.updateDiashowParameters(this._modalRef)
            }

            this._isModalVisible = !this._isModalVisible
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

  private updateDiashowParameters(modalRef: NgbModalRef): void {
    if (!this._isModalVisible) {
      modalRef.result.then((settingData) => {
        if (settingData.keyword) {
          this.carouselNav.keyword = settingData.keyword
        }

        if (settingData.interval) {
          this.carouselNav.interval = settingData.interval
        }

        if (settingData.bgColor) {
          this.carouselNav.bgColor = settingData.bgColor
        }
      })
    }
  }
}
