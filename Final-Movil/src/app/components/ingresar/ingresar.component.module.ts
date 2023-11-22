import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IngresarComponent } from './ingresar.component';

@NgModule({
  declarations: [
    IngresarComponent,
    // Otros componentes si los tienes
  ],
  imports: [
    IonicModule,
    // Otros módulos si los necesitas
  ],
  exports: [
    IngresarComponent,
    // Otros componentes y módulos exportados si es necesario
  ],
})
export class IngresarComponentModule {}
