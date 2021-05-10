import { Component, Input } from '@angular/core'
import { LocalStorage } from 'ngx-webstorage'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  host: {
    class: 'h-full'
  }
})
export class SettingsComponent {
  // @LocalStorage('bgColor') private readonly _bgColor: string
  @LocalStorage('interval') private _interval: number

  // public get bgColor(): string {
  //   return this._bgColor
  // }

  // @Input() public set bgColor(value: string) {
  //   if (!value) {
  //     return
  //   }

  //   this._bgColor = value
  //   document.documentElement.style.setProperty('--bg-color', value)

  //   this._appRef.tick()
  // }

  public get interval(): number {
    if (this._interval) {
      return this._interval / 1000
    }

    return environment.interval * 1000
  }

  @Input() public set interval(value: number) {
    if (this._interval === value) { return }

    // test if word
    if (/\d/g.test(value.toString())) {
      this._interval = value * 1000

      // this._appRef.tick()

      // TODO solve this
      // this._slideshowService.restartInterval()
    } else {
      // TODO showError()
    }
  }
}
