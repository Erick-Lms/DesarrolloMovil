import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferenciaModalPageRoutingModule } from './transferencia-modal-routing.module';

import { TransferenciaModalPage } from './transferencia-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferenciaModalPageRoutingModule
  ],
  declarations: [TransferenciaModalPage]
})
export class TransferenciaModalPageModule {}
