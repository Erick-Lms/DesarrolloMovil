import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { TransferenciasService } from '../services/transferenciaservice.service';

@Component({
  selector: 'app-transferencia-modal',
  templateUrl: './transferencia-modal.page.html',
  styleUrls: ['./transferencia-modal.page.scss'],
})
export class TransferenciaModalPage implements OnInit {
  contacto: any; // Datos del contacto
  montoTransferir: number = 0;
  saldo: any;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute, 
    private modalController: ModalController,
    private sharedService: SharedService,
    private transferenciasService: TransferenciasService
    ) {}
    
    
    ngOnInit() {
    this.sharedService.contactos$.subscribe((contactos) => {
      this.contacto = contactos;
    });
    // Utiliza 'paramMap' para obtener los datos pasados desde la página anterior
    this.route.paramMap.subscribe((params) => {
      this.saldo = params.get('saldo');
    });
  }
  cancelar() {
    this.navCtrl.back(); // Esto navegará hacia atrás en la pila de navegación
  }

  confirmar() {
    // Realiza la lógica de la transferencia aquí
    if (this.montoTransferir > this.saldo) {
      // Saldo insuficiente
      console.log('Saldo insuficiente');
    } else if (!this.esHoraFechaPermitida()) {
      // Condición de hora y fecha no cumplida
      console.log('No se permite la transferencia en este momento');
    } else {
      // Realiza la transferencia y devuelve los datos al componente padre
      const resultadoTransferencia = {
        fechaHora: new Date(),
        nombre: this.contacto?.name,
        monto: this.montoTransferir,
      };

      // Guarda la transferencia en el servicio
      this.transferenciasService.guardarTransferencia(resultadoTransferencia);

      // Cierra el modal y devuelve los resultados
      this.modalController.dismiss(resultadoTransferencia);
    }
  }

  esHoraFechaPermitida(): boolean {
    // Aquí puedes implementar la lógica para verificar la hora y fecha permitida
    // Por ejemplo, permite transferencias solo de 9:00 AM a 5:00 PM
    const horaActual = new Date().getHours();
    return horaActual >= 9 && horaActual < 17;
  }
}