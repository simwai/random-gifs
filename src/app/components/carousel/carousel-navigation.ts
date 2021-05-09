import { Component } from '@angular/core'
import { LocalStorage } from 'ngx-webstorage'

import { SlideshowService } from 'src/app/services/slideshow.service'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss'],
  host: {
    class: 'h-full flex flex-col justify-center items-center'
  }
})
export class CarouselNavigationComponent {
  @LocalStorage('bgColor') public bgColor: string

  // tslint:disable-next-line: unnecessary-constructor
  constructor(public slideshowService: SlideshowService) {}
}
