import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Contactos } from 'src/app/interfaces/contactos';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss'],
})
export class TransferenciaComponent  implements AfterViewInit { 
  @ViewChild('swiperContainer', {read: ElementRef}) swiperContainer!: ElementRef;
  swiper: Swiper | undefined;
  // objContactos: Contactos | undefined;

  contact: Contactos[] = [
    { id: 1, color: 'white', name: 'Juan Marquez', image: './assets/avatars/avatar.png', n_cuenta: '1589623457879651', banco: 'Banco Santander Rio'},
    { id: 2, color: 'white', name: 'Esteban Morales', image: './assets/avatars/avatar1.png', n_cuenta: '7896515269746851', banco: 'Banco Macro' },
    { id: 3, color: 'white', name: 'Ernesto Villalobos', image: './assets/avatars/avatar2.png', n_cuenta: '2244589165321578', banco:'Banco Nacion'},
    { id: 4, color: 'white', name: 'Carmen Figueroa', image: './assets/avatars/avatar3.png', n_cuenta: '345789651589621', banco: 'Banco Patagonia' },
    { id: 5, color: 'white', name: 'Rodrigo Ferreira', image: './assets/avatars/avatar4.png', n_cuenta: '457896515896231', banco: 'Banco Cabal'},
    { id: 6, color: 'white', name: 'Juan Marquez', image: './assets/avatars/avatar.png', n_cuenta: '1589623457879651', banco: 'Banco Santander Rio'},
    { id: 7, color: 'white', name: 'Ricardo Arjona', image: './assets/avatars/avatar1.png', n_cuenta: '7896515269746851', banco: 'Banco Macro' },
    { id: 8, color: 'white', name: 'Leonel Messi', image: './assets/avatars/avatar2.png', n_cuenta: '2244589165321578', banco:'Banco Nacion'},
    { id: 9, color: 'white', name: 'Diego Maradona', image: './assets/avatars/avatar3.png', n_cuenta: '345789651589621', banco: 'Banco Patagonia' },
    { id: 10, color: 'white', name: 'Belingham', image: './assets/avatars/avatar4.png', n_cuenta: '457896515896231', banco: 'Banco Cabal'},
  
  ];
  constructor(
    private sharedService: SharedService,
    private router: Router,
    ) {}


  navigateToTransferenciaModal() {
      // Usar el servicio para compartir la lista de contactos
      this.sharedService.setContactos(this.contact);
  
      this.router.navigate(['./transferencia-modal']);
    }
  ngOnInit() {}

  shuffleArray(array: any[]): any[] {
    // Lógica para mezclar el array (puedes usar tu propia lógica de mezcla)
    return array.sort(() => Math.random() - 0.5);
  }

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, this.swiperConfig);
  }
  swiperConfig = {
    slidesPerView: 4,
    spaceBeetwen: 5,
    pagination: {
      el: '.swiper-pagination',
      clicable: true,
    },
  };

  //  accionDelBoton() {
  //   // Aquí puedes agregar la lógica que se ejecutará cuando se haga clic en el botón
  //     console.log('Botón clicado');
  }
// }