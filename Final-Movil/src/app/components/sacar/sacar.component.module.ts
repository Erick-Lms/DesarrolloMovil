import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SacarComponent } from './sacar.component';

@NgModule({
  declarations: [
    SacarComponent,
    // Otros componentes si los tienes
  ],
  imports: [
    IonicModule,
    // Otros módulos si los necesitas
  ],
  exports: [
    SacarComponent,
    // Otros componentes y módulos exportados si es necesario
  ],
})
export class SacarComponentModule {}
