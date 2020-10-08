import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { NgbdCarouselNavigationComponent } from './carousel-navigation'

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdCarouselNavigationComponent],
  exports: [NgbdCarouselNavigationComponent],
  bootstrap: [NgbdCarouselNavigationComponent]
})
export class NgbdCarouselNavigationModule {}
