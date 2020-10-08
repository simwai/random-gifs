import { NgbdCarouselNavigationComponent } from './carousel/carousel-navigation'
import { Component, HostListener, ViewChild } from '@angular/core'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'

import { SettingsComponent } from './settings/settings.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // {static: false } is default
  @ViewChild(NgbdCarouselNavigationComponent) carouselNav: NgbdCarouselNavigationComponent

  private _isModalVisible: boolean = false
  private _swipeCoord?: [number, number]
  private _swipeTime?: number

  private readonly ngbModalOptions = {
    centered: true,
    size: 'sm'
  }

  constructor(private _modalService: NgbModal) { }

  @HostListener('document:keypress', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      if (!this._isModalVisible) {
        this.updateDiashowParameters()
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

      if (duration < 1000 //
        && (Math.abs(direction[0]) > 10) // Long enough
        && (Math.abs(direction[0] * 3) < Math.abs(direction[1]))) { // Horizontal enough
        const swipe = direction[0] < 0 ? 'next' : 'previous'
        // Do whatever you want with swipe

        if (!this._isModalVisible) {
          this.updateDiashowParameters()
        }

        this._isModalVisible = !this._isModalVisible
      }
    }
  }

  private updateDiashowParameters(): void {
    const options: NgbModalOptions = this.ngbModalOptions

    if (!this._isModalVisible) {
      const modalRef = this._modalService.open(SettingsComponent, options)

      modalRef.result.then((settingData) => {
        if (settingData.keyword) {
          this.carouselNav.keyword = settingData.keyword
        }

        if (settingData.interval) {
          this.carouselNav.interval = settingData.interval
        }
      })
    }
  }
}
