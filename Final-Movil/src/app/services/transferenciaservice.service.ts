// transferencias.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciasService {
  private transferencias: any[] = [];

  constructor() {}

  guardarTransferencia(transferencia: any) {
    this.transferencias.push(transferencia);
    // Puedes agregar lógica adicional aquí, como enviar los datos al servidor, etc.
  }

  obtenerTransferencias() {
    return this.transferencias.slice(); // Devuelve una copia para evitar modificaciones no deseadas
  }
}
