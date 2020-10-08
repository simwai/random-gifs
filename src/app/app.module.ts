import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NgbdCarouselNavigationModule } from './carousel/carousel-navigation.module'

import { AppComponent } from './app.component'
import { SettingsComponent } from './settings/settings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
   declarations: [
      AppComponent,
      SettingsComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      NgbdCarouselNavigationModule,
      NgbModule,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
