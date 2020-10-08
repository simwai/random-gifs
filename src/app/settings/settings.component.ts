import { Component, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  @Input() public keyword: string
  @Input() public interval: number

  constructor(public activeModal: NgbActiveModal) {}

  public passBack(): void {
    const settingData = {keyword: this.keyword, interval: this.interval}
    this.activeModal.close(settingData)
  }
}
