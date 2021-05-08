import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CarouselNavigationComponent } from './components/carousel/carousel-navigation'
import { GuideComponent } from './components/guide/guide.component'
import { SettingsComponent } from './components/settings/settings.component'

const routes: Routes = [
  { path: 'guide', component: GuideComponent, data: { animation: 'Guide' } },
  { path: 'settings', component: SettingsComponent, data: { animation: 'Settings' } },
  { path: 'carousel', component: CarouselNavigationComponent, data: { animation: 'Carousel' } },
  { path: '', redirectTo: '/carousel', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
