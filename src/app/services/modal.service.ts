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

  public async tryOpenModal(): Promise<NgbModalRef> | null {
    const options: NgbModalOptions = this.ngbModalOptions

    if (!ModalService.isModalVisible) {
      this._modalRef = this._modal.open(SettingsComponent, options)

      ModalService.isModalVisible = true

      return this._modalRef.result
    }

    ModalService.isModalVisible = false
    return null
  }
}
