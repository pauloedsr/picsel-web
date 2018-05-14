import { EnsaioService } from './../../../services/ensaio.service';
import { Foto } from './../../../class/ensaio-view';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-service-modal',
  styleUrls: [('./foto-modal.component.scss')],
  templateUrl: './foto-modal.component.html'
})

export class FotoModal implements OnInit {

  modalHeader: string;
  foto: Foto;

  constructor(private activeModal: NgbActiveModal, private ensaioService: EnsaioService) {
  }

  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }

  selecionaFoto() {
    this.ensaioService.selecionaFoto(this.foto).subscribe(data => {
      console.log('atualiza foto', this.foto, data);
      this.foto.selecionado = data.selecionado;
      this.activeModal.close(data.totalSel);
    });
  }
}
