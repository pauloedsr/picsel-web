import { Routes, RouterModule } from '@angular/router';

import { EnsaioComponent } from './ensaio.component';

const routes: Routes = [
  {
    path: ':chave',
    component: EnsaioComponent
  }
];

export const routing = RouterModule.forChild(routes);