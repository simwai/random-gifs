import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouteReuseStrategy } from '@angular/router'
import { SvgIconsModule } from '@ngneat/svg-icon'
import { NgxWebstorageModule } from 'ngx-webstorage'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CarouselNavigationComponent } from './components/carousel/carousel-navigation'
import { ColorPickerComponent } from './components/color-picker/color-picker.component'
import { GuideComponent } from './components/guide/guide.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { SettingsComponent } from './components/settings/settings.component'
import { CustomReuseStrategy } from './custom-reuse-strategy'

import { appArrowLeftBoldBoxIcon } from './svg/arrow-left-bold-box'
import { appArrowRightBoldBoxIcon } from './svg/arrow-right-bold-box'
import { appCogIcon } from './svg/cog'
import { appGestureSwipeLeftIcon } from './svg/gesture-swipe-left'
import { appGestureSwipeRightIcon } from './svg/gesture-swipe-right'
import { appGithubIcon } from './svg/github'
import { appHeadQuestionIcon } from './svg/head-question'
import { appHelpIcon } from './svg/help'
import { appMagnifyIcon } from './svg/magnify'

@NgModule({
   declarations: [
      AppComponent,
      SettingsComponent,
      ColorPickerComponent,
      GuideComponent,
      NavbarComponent,
      CarouselNavigationComponent
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      NgxWebstorageModule.forRoot(),
      SvgIconsModule.forRoot({
        icons: [
          appCogIcon,
          appHelpIcon,
          appGestureSwipeLeftIcon,
          appGestureSwipeRightIcon,
          appArrowLeftBoldBoxIcon,
          appArrowRightBoldBoxIcon,
          appHeadQuestionIcon,
          appGithubIcon,
          appMagnifyIcon
        ]
      })
   ],
   providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
