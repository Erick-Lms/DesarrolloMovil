import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciasService {
  private saldoSubject = new Subject<number>();
  saldo$ = this.saldoSubject.asObservable();

  transferencias: any[] = [];

  constructor() {}

  guardarTransferencia(transferencia: any) {
    this.transferencias.push(transferencia);
  }

  obtenerTransferencias() {
    return this.transferencias.slice(); // Devuelve una copia para evitar modificaciones no deseadas
  }
}
