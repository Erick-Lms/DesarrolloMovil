import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TransferenciaComponent } from './transferencia.component';
import { SharedService } from 'src/app/services/shared.service';

@NgModule({
  declarations: [
    TransferenciaComponent,
    
  ],
  imports: [
    IonicModule, CommonModule,
  ],
  exports: [
    TransferenciaComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    SharedService
  ]
})
export class TransferenciaComponentModule {}
