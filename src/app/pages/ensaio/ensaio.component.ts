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
  ensaio: EnsaioView;

  constructor(private route: ActivatedRoute, private ensaioService: EnsaioService) {
    route.params.subscribe(params => this.ensaioId = params['id']);
  }

  ngOnInit() {
    this.ensaioService.getEnsaio(this.ensaioId).subscribe((data: EnsaioView) => {
      this.ensaio = data;
      console.log('ensaio', this.ensaio);
    })
  }

}
