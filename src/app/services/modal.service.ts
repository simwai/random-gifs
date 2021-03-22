import { Injectable } from '@angular/core'
import { NgbModalRef, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'

import { SettingsComponent } from '../settings/settings.component'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public static isModalVisible: boolean = false
  private _modalRef: NgbModalRef
  private readonly ngbModalOptions = {
    centered: true,
    size: 'sm'
  }

  constructor(private _modal: NgbModal) { }

  public tryOpenModal(callRef): void {
    const options: NgbModalOptions = this.ngbModalOptions
    this._modalRef = this._modal.open(SettingsComponent, options)

    if (!ModalService.isModalVisible) {
      this.updateDiashowParameters(this._modalRef, callRef)

      ModalService.isModalVisible = true
    }

    ModalService.isModalVisible = false
  }

  public updateDiashowParameters(modalRef: NgbModalRef, callRef): void {
    if (!ModalService.isModalVisible) {
      modalRef.result.then((settingData) => {
        if (settingData.keyword) {
          callRef.keyword = settingData.keyword
        }

        if (settingData.interval) {
          callRef.interval = settingData.interval
        }

        if (settingData.bgColor) {
          callRef.bgColor = settingData.bgColor
        }
      })
    }
  }

}
