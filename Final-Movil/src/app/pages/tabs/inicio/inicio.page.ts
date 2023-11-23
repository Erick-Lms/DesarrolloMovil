import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Swiper from 'swiper';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements AfterViewInit {

  @ViewChild('swiperContainer', { read: ElementRef }) swiperContainer!: ElementRef;
  saldo: number = 10000;

  swiper: Swiper | undefined;
 
  items = ['Item 1', 'Item 2', 'Item 3'];

  addItem(item: string) {
    this.items.push(item);
  }
  constructor(
    public alertController: AlertController,
    public router: Router
  ) {}
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
  ngOnInit(){
    
  }
   
  options = [
      { color: 'ligth', name: 'Ingresar', image: 'assets/icon/money.png', route: 'src/app/components/ingresar'},
      { color: 'ligth', name: 'Transferir', image: 'assets/icon/transfer-money.png', route: 'src/app/components/transferencia'},
      { color: 'ligth', name: 'Sacar', image: 'assets/icon/arrow.png', route: 'src/app/components/sacar'},
      { color: 'ligth', name: 'Información', image: 'assets/icon/info.png', route: 'src/app/components/info'},
  ];
  ngAfterViewInit() {
      this.swiper = new Swiper(this.swiperContainer.nativeElement, this.swiperConfig);
  }

    swiperConfig = {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    };
}