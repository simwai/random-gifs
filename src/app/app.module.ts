import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CarouselNavigationModule } from './components/carousel/carousel-navigation.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ColorPickerModule } from 'ngx-color-picker'
import { NgxWebstorageModule } from 'ngx-webstorage'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { SettingsComponent } from './settings/settings.component'
import { ColorPickerComponent } from './components/color-picker/color-picker.component'
import { CommonModule } from '@angular/common'

@NgModule({
   declarations: [
      AppComponent,
      SettingsComponent,
      ColorPickerComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
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
