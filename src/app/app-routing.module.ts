import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CarouselNavigationComponent } from './components/carousel/carousel-navigation'
import { GuideComponent } from './components/guide/guide.component'
import { SettingsComponent } from './components/settings/settings.component'

const routes: Routes = [
  { path: 'guide', component: GuideComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'carousel', component: CarouselNavigationComponent},
  { path: '', redirectTo: '/carousel', pathMatch: 'full'},
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
