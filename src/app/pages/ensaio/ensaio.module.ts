import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnsaioComponent } from './ensaio.component';
import { routing } from './ensaio.routing';
import { NgaModule } from '../../theme/nga.module';


@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
  ],
  declarations: [
    EnsaioComponent
  ]
})
export class EnsaioModule { }
