import { Injectable } from '@angular/core'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'
import { CarouselNavigationComponent } from '../components/carousel/carousel-navigation'

import { SettingsComponent } from '../settings/settings.component'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public static isModalVisible: boolean = false

  private readonly ngbModalOptions = {
    centered: true,
    size: 'sm'
  }

  constructor(private _modal: NgbModal) { }

  public async tryOpenModal(): Promise < void > {
    const options: NgbModalOptions = this.ngbModalOptions

    if (!ModalService.isModalVisible) {
      try {
        this._modal.open(SettingsComponent, options)
      } catch (_error) {
        ModalService.isModalVisible = false
      }

      ModalService.isModalVisible = true
    }

    ModalService.isModalVisible = false
  }

}
