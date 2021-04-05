import { Component, HostListener, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { LocalStorage, LocalStorageService } from 'ngx-webstorage'

import { environment } from 'src/environments/environment'
import { StyleHelperService } from '../services/style-helper.service'

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private _styleHelperService: StyleHelperService,
    private _localStorageService: LocalStorageService
  ) { }

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

  public get bgColor(): string {
    return this._bgColor
  }

  @Input() public set bgColor(value) {
    if (!value) {
      return
    }

    this._bgColor = value
    // TODO make it possible to pass result of getContrast()
    this._styleHelperService.addColorsToDocument(value)
    // TODO refactor localstorage names, put this maybe into addColorToDocument of stylehelper??
    this._localStorageService.store('bgColor', value)
    this._localStorageService.store('fontColor', this._styleHelperService.getContrast(value))
  }

  @LocalStorage('keyword')
  private _keyword: string

  @LocalStorage('interval')
  private _interval: number

  @LocalStorage('bgColor')
  private _bgColor: string

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

