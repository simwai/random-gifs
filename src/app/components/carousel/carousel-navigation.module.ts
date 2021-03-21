import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { CarouselNavigationComponent } from './carousel-navigation'

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [CarouselNavigationComponent],
  exports: [CarouselNavigationComponent],
  bootstrap: [CarouselNavigationComponent]
})
export class CarouselNavigationModule { }
