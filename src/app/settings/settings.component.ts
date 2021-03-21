import { Component, HostListener, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { LocalStorage } from 'ngx-webstorage'


@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(public activeModal: NgbActiveModal) { }

  @LocalStorage()
  @Input() public keyword: string

  @LocalStorage()
  @Input() public interval: number

  @LocalStorage()
  @Input() public bgColor: string

  @HostListener('document:keypress', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.passBack()
    }
  }

  public passBack(): void {
    const settingData = { keyword: this.keyword, interval: this.interval, bgColor: this.bgColor}
    this.activeModal.close(settingData)
  }
}

