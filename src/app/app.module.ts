import { NgModule } from '@angular/core'
import { RouteReuseStrategy } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxWebstorageModule } from 'ngx-webstorage'
import { SvgIconsModule } from '@ngneat/svg-icon'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SettingsComponent } from './components/settings/settings.component'
import { ColorPickerComponent } from './components/color-picker/color-picker.component'
import { GuideComponent } from './components/guide/guide.component'
import { CarouselNavigationComponent } from './components/carousel/carousel-navigation'
import { NavbarComponent } from './components/navbar/navbar.component'
import { CustomReuseStrategy } from './custom-reuse-strategy'

import { appGestureSwipeRightIcon } from './svg/gesture-swipe-right'
import { appGestureSwipeLeftIcon } from './svg/gesture-swipe-left'
import { appArrowLeftBoldBoxIcon } from './svg/arrow-left-bold-box'
import { appArrowRightBoldBoxIcon } from './svg/arrow-right-bold-box'
import { appHeadQuestionIcon } from './svg/head-question'
import { appGithubIcon } from './svg/github'
import { appCogIcon } from './svg/cog'
import { appHelpIcon } from './svg/help'

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
          appGithubIcon
        ],
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
