import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferenciaModalPage } from './transferencia-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TransferenciaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferenciaModalPageRoutingModule {}
