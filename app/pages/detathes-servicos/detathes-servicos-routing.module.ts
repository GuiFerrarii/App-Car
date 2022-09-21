import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetathesServicosPage } from './detathes-servicos.page';

const routes: Routes = [
  {
    path: '',
    component: DetathesServicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetathesServicosPageRoutingModule {}
