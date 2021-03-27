import { Injectable } from '@angular/core'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'

import { SettingsComponent } from '../settings/settings.component'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public static isModalVisible: boolean = false

  private readonly ngbModalOptions = {
    centered: true,
    size: 'sm',
    animation: false
  }

  constructor(private _modal: NgbModal) { }

  public async tryOpenModal(): Promise<void> {
    const options: NgbModalOptions = this.ngbModalOptions

    if (!ModalService.isModalVisible) {
      try {
        this._modal.open(SettingsComponent, options)
        ModalService.isModalVisible = true
      } catch (_error) {
        ModalService.isModalVisible = false
      }
    } else {
      ModalService.isModalVisible = false
    }
  }

}
