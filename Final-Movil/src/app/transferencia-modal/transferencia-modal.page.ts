import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { TransferenciasService } from '../services/transferenciaservice.service';
import { SaldoService } from '../services/saldo-service.service';
import { NavController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-transferencia-modal',
  templateUrl: './transferencia-modal.page.html',
  styleUrls: ['./transferencia-modal.page.scss'],
})
export class TransferenciaModalPage implements OnInit {
  name: string | undefined;
  image: string | undefined;
  banco: string | undefined;

  contacto: any; // Datos del contacto
  montoTransferir: number = 0;
  saldo: any;
  contact: { id: number; color: string; name: string; image: string; n_cuenta: string; banco: string; }[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private sharedService: SharedService,
    private transferenciasService: TransferenciasService,
    private saldoService: SaldoService
    ) {}
    
    ngOnInit() {
      this.contact = this.sharedService.getContactos();
      this.saldo = this.saldoService.getSaldo();
    }

    ionViewDidEnter() {
      // Recupera los parámetros de la URL
      this.route.queryParams.subscribe(params => {
        this.name = params['name'];
        this.image = params['image'];
        this.banco = params['banco'];
      });
    }

    cancelar() {
      this.navCtrl.back();
    }

    confirmar() {
      console.log('Transferencia confirmada');  // Puedes agregar la lógica que desees aquí
    }
  };



  // cancelar() {
  //   this.navCtrl.back(); // Esto navegará hacia atrás en la pila de navegación
  // }


  // confirmar() {
  //   // Realiza la lógica de la transferencia aquí
  //   if (this.montoTransferir > this.saldo) {
  //     // Saldo insuficiente
  //     console.log('Saldo insuficiente');
  //   } else if (!this.esHoraFechaPermitida()) {
  //     // Condición de hora y fecha no cumplida
  //     console.log('No se permite la transferencia en este momento');
  //   } else {
  //     // Realiza la transferencia y devuelve los datos al componente padre
  //     const resultadoTransferencia = {
  //       fechaHora: new Date(),
  //       nombre: this.contacto?.name,
  //       monto: this.montoTransferir,
  //     };

    //   // Guarda la transferencia en el servicio
    //   this.transferenciasService.guardarTransferencia(resultadoTransferencia);

    //   // Cierra el modal y devuelve los resultados
    //   this.modalController.dismiss(resultadoTransferencia);
    // }
  // }

//   esHoraFechaPermitida(): boolean {
//     // Aquí puedes implementar la lógica para verificar la hora y fecha permitida
//     // Por ejemplo, permite transferencias solo de 9:00 AM a 5:00 PM
//     const horaActual = new Date().getHours();
//     return horaActual >= 9 && horaActual < 17;
//   }
// function esHoraFechaPermitida() {
//   throw new Error('Function not implemented.');
// }

