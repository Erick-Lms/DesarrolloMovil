import { NgModule } from '@angular/core';
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

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, InfoComponent, IngresarComponent, SacarComponent, TransferenciaComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
