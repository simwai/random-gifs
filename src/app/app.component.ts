import { animate, animateChild, query, style, transition, trigger } from '@angular/animations'
import { Component, Input, ViewChild } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { CarouselNavigationComponent } from './components/carousel/carousel-navigation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            transform: 'translateX(0)',
            opacity: 0
          })
        ], { optional: true }),
        query(':enter', animateChild(), { optional: true }),
        query(':enter', [
          animate('700ms ease-out'),
          style({ opacity: 1 })
        ], { optional: true })
        // query(':leave', animateChild()),
        // query(':leave', [
        //   animate('700ms ease-out'), style({ opacity: 1 })
        // ])
      ])
    ])
  ]
})
export class AppComponent {
  // {static: false } is default
  @ViewChild('carousel') public carouselNav: CarouselNavigationComponent

  @Input() public isAlternative: boolean

  private _swipeCoord?: [number, number]
  private _swipeTime?: number

  public onActivate(event): void {
    this.carouselNav = event
  }

  // Here, the prepareRoute() method takes the value of the outlet directive (established through #outlet="outlet") and returns
  // a string value representing the state of the animation based on the custom data of the current active route.
  // You can use this data to control which transition to execute for each route.
  public prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
  }

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

            this.carouselNav.nextGif()
          }

          // Right swipe
          if (direction[0] > 0) {
            console.log('right swipe')

            this.carouselNav.previousGif()
          }
        }
      }
    }
  }
}
