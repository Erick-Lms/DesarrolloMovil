import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
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
  contact: { id: number; color: string; name: string; image: string; n_cuenta: string; banco: string; }[] | undefined;


  constructor(
    private sharedService: SharedService,
    private router: Router,
    ) {}


  navigateToTransferenciaModal( contacto: any) {  
      this.router.navigate(['./transferencia-modal'], {state: {contacto}});
    }
  ngOnInit() {
    this.contact = this.sharedService.getContactos();
  }

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