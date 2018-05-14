import { FotoModal } from './foto-modal/foto-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Foto } from './../../class/ensaio-view';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnsaioService } from '../../services/ensaio.service';
import { EnsaioView } from '../../class/ensaio-view';

@Component({
  selector: 'app-ensaio',
  templateUrl: './ensaio.component.html',
  styleUrls: ['./ensaio.component.scss']
})
export class EnsaioComponent implements OnInit {

  ensaioId: string;
  ensaio: EnsaioView = new EnsaioView();
  pagina: number = 1;

  constructor(  private route: ActivatedRoute, 
                private ensaioService: EnsaioService,
                private modalService: NgbModal
  ) {
    route.params.subscribe(params => this.ensaioId = params['chave']);
  }

  ngOnInit() {
    this.getFotos();
  }

  private getFotos() {
    this.ensaioService.getEnsaio(this.ensaioId, this.pagina).subscribe((data: EnsaioView) => {
      if(this.ensaio.ensaio == undefined) {
        this.ensaio = data;
      } else {
        this.ensaio.totalSel = data.totalSel;
        data.fotos.forEach(foto => {
          this.ensaio.fotos.push(foto);
        })
      }
      console.log('ensaio', this.ensaio);
    })
  }

  zoom(foto: Foto) {
    const activeModal = this.modalService.open(FotoModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = foto.nome;
    activeModal.componentInstance.foto = foto;
    activeModal.result.then(totalSel => this.ensaio.totalSel = totalSel);
  }

  nrFotosSelecionadas(){
    if(this.ensaio.fotos != undefined && this.ensaio.fotos.length > 0)
      return this.ensaio.fotos.filter((f) => {if(f.selecionado) return f}).length;
    else
      return 0;
  }

  styleSelecionado(foto: Foto, background: boolean){
    if(foto.selecionado && this.nrFotosSelecionadas() < 10) {
      return {'background-color' : 'orange'}
    } else if(foto.selecionado) {
      return {'background-color' : 'greenyellow'}
    } else {
      return {'background-color' : 'white'}
    }
  }

  styleColorSelecionados(){
    if(this.nrFotosSelecionadas() < 10) {
      return {'color' : 'orange'}
    } else{
      return {'color' : 'greenyellow'}
    }
  }

  maisFotos() {
    this.pagina++;
    this.getFotos();
  }


}
