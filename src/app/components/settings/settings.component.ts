import { Component, EventEmitter, Input, Output } from '@angular/core'
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
  @Output() public readonly intervalChanged = new EventEmitter<number>()
  @LocalStorage('interval') private _interval: number

  public get interval(): number {
    return this._interval ? this._interval / 1000 : environment.interval
  }

  @Input() public set interval(value: number) {
    if (this._interval === value) { return }

    // test if word
    if (/\d/g.test(value.toString())) {
      this._interval = value * 1000

      this.intervalChanged.emit(this._interval)

      // this._appRef.tick()

      // TODO solve this
      // this._slideshowService.restartInterval()
    } else {
      // TODO showError()
    }
  }
}
