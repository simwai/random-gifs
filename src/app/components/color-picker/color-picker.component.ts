import { Component, Input, OnInit } from '@angular/core'
import { LocalStorage } from 'ngx-webstorage'
const tailwindConfig = require('../../../../tailwind.config.js')

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  public colors: string[]

  @LocalStorage('bgColor')
  private _bgColor: string

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

  constructor() {
    const colors =  tailwindConfig.theme.colors
    const parsedColors = []

    for (const item of Object.values(colors).slice(3)) {
      parsedColors.push(item)
    }

    this.colors = parsedColors
  }

  public ngOnInit(): void {
  }

  public saveAccentColor(event: MouseEvent): void {
    // attention: is rgb, not color name !
    console.log((event.target as any).style.backgroundColor)
    this.bgColor = (event.target as any).style.backgroundColor
  }
}
