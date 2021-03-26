import { Component, HostListener, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { LocalStorage } from 'ngx-webstorage'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(public activeModal: NgbActiveModal) { }

  @LocalStorage('keyword')
  private _keyword: string

  public get keyword(): string {
    return this._keyword ?? environment.keyword
  }

  @Input() public set keyword(value) {
    this._keyword = value
  }

  @LocalStorage('interval')
  private _interval: number

  public get interval(): number {
    return this._interval ?? environment.interval
  }

  @Input() public set interval(value) {
    this._interval = value
  }

  @LocalStorage('fontColor')
  private _fontColor

  @LocalStorage('bgColor')
  private _bgColor: string

  public get bgColor(): string {
    return this._bgColor ?? environment.bgColor
  }

  @Input() public set bgColor(value) {
    this._bgColor = value

    this._fontColor = SettingsComponent.getContrast(value)
  }

  public get fontColor(): string {
    return this._fontColor ?? environment.fontColor
  }

 // TODO put this in utility class
 /*!
  * Get the contrasting color for any hex color
  * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
  * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
  * @param  {String} A hexcolor value
  * @return {String} The contrasting color (black or white)
  */
  public static getContrast(hexcolor: string): 'black' | 'white' {
    // If a leading # is provided, remove it
    if (hexcolor.slice(0, 1) === '#') {
      hexcolor = hexcolor.slice(1)
    }
     // If a three-character hexcode, make six-character
    if (hexcolor.length === 3) {
      hexcolor = hexcolor.split('').map((hex) => {
        return hex + hex
      }).join('')
    }
     // Convert to RGB value
    const r = parseInt(hexcolor.substr(0, 2), 16)
    const g = parseInt(hexcolor.substr(2, 2), 16)
    const b = parseInt(hexcolor.substr(4, 2), 16)
     // Get YIQ ratio
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
     // Check contrast
    return (yiq >= 128) ? 'black' : 'white'
  }

  @HostListener('document:keypress', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      console.log('triggered enter in settingscomponent')
      this.passBack()
    }
  }

  public passBack(): void {
    const settingData = { keyword: this.keyword, interval: this.interval, bgColor: this.bgColor}
    this.activeModal.close(settingData)
  }
}

