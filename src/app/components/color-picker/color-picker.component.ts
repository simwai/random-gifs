import { Component, Input, ViewChild } from '@angular/core'
import { LocalStorage } from 'ngx-webstorage'

const tailwindConfig = require('../../../../tailwind.config.js')

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  public colors: string[]

  constructor() {
    this.loadColors()
  }

  @LocalStorage('bgColor')
  private _bgColor: string

  public get bgColor(): string {
    return this._bgColor
  }

  @Input() public set bgColor(value) {
    if (!value) {
      return
    }

    if (value.match('rgb')) {
      value = this.rgbStringToHexCode(value)
    }

    this._bgColor = value
    document.documentElement.style.setProperty('--bg-color', value)
  }

  private loadColors(): void {
    const colors =  tailwindConfig.theme.colors
    const parsedColors = []

    for (const item of Object.values(colors).slice(3)) {
      parsedColors.push(item)
    }

    this.colors = parsedColors
  }

  public saveAccentColor(event: MouseEvent): void {
    // attention: is rgb, not color name !
    // console.log((event.target as any).style.backgroundColor)

    this.bgColor = this.rgbStringToHexCode((event.target as any).style.backgroundColor)
  }

  public rgbStringToHexCode(rgb: string): string {
    const bgColorRgbCodes = rgb.split(',').map(x => {
      const charArray = [...x]
      const result = []

      for (const char of charArray) {
        if (/\d/.test(char)) {
          result.push(char)
        }
      }

      return result.join('')
    })

    let hexCode = '#'

    for (const rgbCode of bgColorRgbCodes) {
      const hexCodePart = this.rgbToHex(rgbCode)
      hexCode += hexCodePart
    }

    return hexCode
  }

  private rgbToHex(rgb: any): string {
    let hex = Number(rgb).toString(16)

    if (hex.length < 2) {
      hex = '0' + hex
    }

    return hex
  }
}
