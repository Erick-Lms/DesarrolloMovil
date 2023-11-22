// info.component.module.ts

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InfoComponent } from './info.component';

@NgModule({
  declarations: [
    InfoComponent,
    // Otros componentes si los tienes
  ],
  imports: [
    IonicModule,
    // Otros módulos si los necesitas
  ],
  exports: [
    InfoComponent,
    // Otros componentes y módulos exportados si es necesario
  ],
})
export class InfoComponentModule {}
