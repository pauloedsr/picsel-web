import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnsaioComponent } from './ensaio.component';
import { routing } from './ensaio.routing';


@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    EnsaioComponent
  ]
})
export class EnsaioModule { }
