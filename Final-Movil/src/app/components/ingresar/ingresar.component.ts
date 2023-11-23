import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss'],
})
export class IngresarComponent  implements OnInit {
  monto: number;
  constructor() {
    this.monto = 0;
  }
  guardarMonto() {
    // Aquí puedes realizar alguna acción con el monto ingresado, como enviarlo a un servidor, etc.
    console.log('Monto ingresado:', this.monto);
  }

  ngOnInit() {}

}
