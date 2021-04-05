import { Component, HostListener, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { LocalStorage } from 'ngx-webstorage'

import { environment } from 'src/environments/environment'
import { StyleHelperService } from '../services/style-helper.service'

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(public activeModal: NgbActiveModal, private _styleHelperService: StyleHelperService) { }

  public get keyword(): string {
    return this._keyword ?? environment.keyword
  }

  @Input() public set keyword(value) {
    this._keyword = value
  }

  public get interval(): number {
    return this._interval ?? environment.interval
  }

  @Input() public set interval(value) {
    this._interval = value
  }

  private _bgColor: string

  public get bgColor(): string {
    return this._bgColor ?? this._styleHelperService.getBgColorFromDocument()
  }

  @Input() public set bgColor(value) {
    this._bgColor = value
    this._styleHelperService.addColorsToDocument(value)
  }

  @LocalStorage('keyword')
  private _keyword: string

  @LocalStorage('interval')
  private _interval: number

  @HostListener('document:keypress', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      console.log('triggered enter in settingscomponent')
      this.passBack()
    }
  }

  public passBack(): void {
    const settingData = { keyword: this.keyword, interval: this.interval}
    this.activeModal.close(settingData)
  }
}

