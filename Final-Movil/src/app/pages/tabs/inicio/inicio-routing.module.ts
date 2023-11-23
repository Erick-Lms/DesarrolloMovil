import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioPage } from './inicio.page';
import { TransferenciaComponent } from 'src/app/components/transferencia/transferencia.component';
import { IngresarComponent } from 'src/app/components/ingresar/ingresar.component';
import { SacarComponent } from 'src/app/components/sacar/sacar.component';
import { InfoComponent } from 'src/app/components/info/info.component';


const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'src/app/components/ingresar', component:IngresarComponent
  },
  {
    path: 'src/app/components/transferencia', component:TransferenciaComponent
  },  
  {
    path: 'src/app/components/sacar', component:SacarComponent
  },
  {
    path: 'src/app/components/info', component:InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
