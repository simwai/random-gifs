import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CarouselNavigationModule } from './components/carousel/carousel-navigation.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ColorPickerModule } from 'ngx-color-picker'
import { NgxWebstorageModule } from 'ngx-webstorage'

import { AppComponent } from './app.component'
import { SettingsComponent } from './settings/settings.component'

@NgModule({
   declarations: [
      AppComponent,
      SettingsComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      CarouselNavigationModule,
      ColorPickerModule,
      NgxWebstorageModule.forRoot(),
      NgbModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
