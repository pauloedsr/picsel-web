import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnsaioComponent } from './ensaio.component';
import { routing } from './ensaio.routing';
import { NgaModule } from '../../theme/nga.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FotoModal } from './foto-modal/foto-modal.component';


@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    NgbModalModule
  ],
  declarations: [
    EnsaioComponent,
    FotoModal,
  ],
  entryComponents: [
    FotoModal
  ]
})
export class EnsaioModule { }
