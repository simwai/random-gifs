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
  @LocalStorage('bgColor') private _bgColor: string
  @LocalStorage('interval') private _interval: number

  public get bgColor(): string {
    return this._bgColor
  }

  @Input() public set bgColor(value) {
    if (!value) {
      return
    }

    this._bgColor = value
    document.documentElement.style.setProperty('--bg-color', value)
  }

  public get interval(): number {
    return this._interval / 1000 ?? environment.interval
  }

  @Input() public set interval(value: number) {
    if (/\d/g.test(value.toString())) {
      this._interval = value * 1000
    } else {
      // TODO showError()
    }
  }
}
