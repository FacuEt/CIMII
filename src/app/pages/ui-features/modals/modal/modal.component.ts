import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal',
  template: `
      <div class="modal-header"
           style="background-color: #ff0000b3;color: white;border-color: #ff0000e6;text-align: center; font-size: 25px;"
      >
          ¡ATENCIÓN!
          <button class="close" aria-label="Close" (click)="closeModal()"><span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div class="modal-body" style="background-color: #ff0000b3;color: white;border-color: #ff0000e6;font-size: 22px;">
          El vehículo ubicado en la cochera A2 se retiró de la misma sin abonar su factura.
      </div>
      <div class="modal-footer" style="background-color: #ff0000b3;color: white;border-color: #ff0000e6;">
          <button class="btn btn-md btn-primary" (click)="closeModal()">Aceptar</button>
      </div>    `,
})
export class ModalComponent {

  modalHeader: string;
  modalContent = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`;

  constructor(private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }
}
