import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { TransferenciasService } from '../services/transferenciaservice.service';
import { SaldoService } from '../services/saldo-service.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

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
    private loadingController: LoadingController,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private sharedService: SharedService,
    private transferenciasService: TransferenciasService,
    private saldoService: SaldoService
  ) {}

  ngOnInit() {
    this.contacto = this.sharedService.getContactos();
    this.saldo = this.saldoService.getSaldo();

    this.transferenciasService.saldo$.subscribe((nuevoSaldo) => {
      this.saldo = nuevoSaldo;
    });

    this.route.queryParams.subscribe((params) => {
      if (params['contacto']) {
        this.contacto = params['contacto'];
      }
    });
  }

  cancelar() {
    this.navCtrl.back();
  }

  async confirmar() {
    // Realiza la lógica de la transferencia aquí
    if (this.montoTransferir > this.saldo) {
      // Saldo insuficiente
      await this.mostrarAlerta('Saldo Insuficiente', 'El saldo no es suficiente para realizar la transferencia.');
    } else if (!this.esHoraFechaPermitida()) {
      // Condición de hora y fecha no cumplida
      await this.mostrarAlerta('Transferencia No Permitida', 'No se permite la transferencia en este momento.');
    } else {
      // Muestra un cargando mientras se realiza la transferencia
      const loading = await this.presentLoading('Realizando transferencia...');

      // Descuenta el monto transferido
      this.saldo -= this.montoTransferir;

      // Realiza la transferencia y devuelve los datos al componente padre
      const resultadoTransferencia = {
        fechaHora: new Date(),
        nombre: this.contacto?.name,
        monto: this.montoTransferir,
      };

      // Guarda la transferencia en el servicio
      this.transferenciasService.guardarTransferencia(resultadoTransferencia);

      // Cierra el cargando
      loading.dismiss();

      // Muestra el alert de transferencia exitosa
      await this.mostrarAlerta('Transferencia Exitosa', 'La transferencia se realizó con éxito.');

      // Cierra el modal y devuelve los resultados
      // (Reemplacé modalController.dismiss por navCtrl.back)
      this.navCtrl.back();
    }
  }

  async esHoraFechaPermitida(): Promise<boolean> {
    // Implementa la lógica para verificar la hora y fecha permitida aquí
    const horaActual = new Date().getHours();
    return horaActual >= 9 && horaActual < 17;
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentLoading(message: string) {
    const loading = await this.loadingController.create({
      message: message,
      duration: 5000, // Ajusta la duración según tus necesidades
    });
    await loading.present();
    return loading;
  }
}
