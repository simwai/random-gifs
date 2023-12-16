import { Component, EventEmitter, Input, Output } from '@angular/core'
import { LocalStorage } from 'ngx-webstorage'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  host: {
    class: 'flex h-full w-100-vw justify-content items-center'
  }
})
export class SettingsComponent {
  @Output() public readonly intervalChanged = new EventEmitter<number>()
  public errorMessage = ''

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
      this.errorMessage = ''
    } else {
      this.errorMessage = 'Please enter digits only!'
    }
  }
}
