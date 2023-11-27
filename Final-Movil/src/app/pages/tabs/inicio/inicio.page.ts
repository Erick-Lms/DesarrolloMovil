import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Swiper from 'swiper';
import { SaldoService } from 'src/app/services/saldo-service.service';
import { TransferenciasService } from 'src/app/services/transferenciaservice.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements AfterViewInit {
  transferencias: any[] | undefined;

  @ViewChild('swiperContainer', { read: ElementRef }) swiperContainer!: ElementRef;
  saldo: any;
  swiper: Swiper | undefined;
  Servicio: any;

  constructor(
    private transferenciasService: TransferenciasService,
    private router: Router,
    public alertController: AlertController,
    public saldoService: SaldoService){}

    ngOnInit() {
      this.saldo = this.saldoService.getSaldo();
      this.transferencias = this.transferenciasService.obtenerTransferencias();
      console.log(this.transferencias);
  
      // Suscríbete al cambio de saldo
      this.saldoService.saldo$.subscribe((nuevoSaldo) => {
        this.saldo = nuevoSaldo;
      });
    }

  async cerrarSesion() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Aceptar',
          handler: () => {
            // Lógica para cerrar la sesión
            this.router.navigate(['./login']);
          },
        },
        
      ],
      backdropDismiss: false , 
      // Evita que se cierre haciendo clic en el fondo
      
    });

    await alert.present();
  }
  configuracion(){
    this.router.navigate(['/tabs/setting']);
  }
   
  options = [
      { color: 'ligth', name: 'Ingresar', image: 'assets/icon/money.png', route: 'src/app/components/ingresar'},
      { color: 'ligth', name: 'Transferir', image: 'assets/icon/transfer-money.png', route: 'src/app/components/transferencia'},
      { color: 'ligth', name: 'Sacar', image: 'assets/icon/arrow.png', route: 'src/app/components/sacar'},
  ];
  ngAfterViewInit() {
      this.swiper = new Swiper(this.swiperContainer.nativeElement, this.swiperConfig);
  }
    swiperConfig = {
      slidesPerView: 3,
      spaceBetween: 5,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    };
}