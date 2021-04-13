import { Component, Input } from '@angular/core'
import { LocalStorage } from 'ngx-webstorage'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  host: {
    class: 'h-100'
  }
})
export class SettingsComponent {
  constructor() { }

  public get interval(): number {
    return this._interval ?? environment.interval
  }

  // TODO change to ms and add min. 1s
  @Input() public set interval(value) {
    this._interval = value
  }

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

  @LocalStorage('interval')
  private _interval: number

  @LocalStorage('bgColor')
  private _bgColor: string
}

