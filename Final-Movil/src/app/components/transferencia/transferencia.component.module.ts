// transferencia.component.module.ts

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TransferenciaComponent } from './transferencia.component';

@NgModule({
  declarations: [
    TransferenciaComponent,
    // Otros componentes si los tienes
  ],
  imports: [
    IonicModule,
    // Otros módulos si los necesitas
  ],
  exports: [
    TransferenciaComponent,
    // Otros componentes y módulos exportados si es necesario
  ],
})
export class TransferenciaComponentModule {}
