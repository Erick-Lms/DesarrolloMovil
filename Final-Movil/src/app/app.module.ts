import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { InfoComponent } from './components/info/info.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { SacarComponent } from './components/sacar/sacar.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';

@NgModule({
  declarations: [AppComponent, InfoComponent, IngresarComponent, SacarComponent, TransferenciaComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
