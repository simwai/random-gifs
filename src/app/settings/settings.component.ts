import { Component, HostListener, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { LocalStorage } from 'ngx-webstorage'

const defaultValues = require('../default-values.json')

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(public activeModal: NgbActiveModal) { }

  public get keyword(): string {
    return this._keyword ?? defaultValues.keyword
  }

  @Input() public set keyword(value) {
    this._keyword = value
  }

  public get interval(): number {
    return this._interval ?? defaultValues.interval
  }

  @Input() public set interval(value) {
    this._interval = value
  }

  public get bgColor(): string {
    return this._bgColor ?? defaultValues.bgColor
  }

  @Input() public set bgColor(value) {
    this._bgColor = value

    this._fontColor = SettingsComponent.getContrast(value)
    console.log(this.fontColor)
  }

  public get fontColor(): string {
    return this._fontColor ?? defaultValues.fontColor
  }

  @LocalStorage('keyword')
  private _keyword: string

  @LocalStorage('interval')
  private _interval: number

  @LocalStorage('bgColor')
  private _bgColor: string

  @LocalStorage('fontColor')
  private _fontColor

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

