// saldo.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaldoService {
  private saldoSubject = new Subject<number>();
  saldo$ = this.saldoSubject.asObservable();
  
  private saldo: number = 10000;
  constructor() {}

  getSaldo() {
    return (this.saldo) ;
  }

  actualizarSaldo(nuevoSaldo: number) {
    this.saldo = nuevoSaldo;
    this.saldoSubject.next(this.saldo);
  }
}
