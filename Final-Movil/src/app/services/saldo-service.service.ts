// saldo.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaldoService {
  saldo = 10000;
  constructor() {}

  getSaldo() {
    return (this.saldo) ;
  }

  // actualizarSaldo(nuevoSaldo: number) {
  //   this.saldo.next(nuevoSaldo);
  // }
}
