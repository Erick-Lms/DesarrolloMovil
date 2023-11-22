import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Option {
  name: string;
  avatar: string;
  color: string;
}
@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss'],
})
export class TransferenciaComponent  implements OnInit {
  options : Option[] = [];

  constructor(private navCtrl: NavController) {
    this.generateRandomOptions();

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  generateRandomOptions() {
    const numberOfOptions = 5; // Puedes ajustar la cantidad de opciones según tus necesidades

    for (let i = 1; i <= numberOfOptions; i++) {
      const randomName = this.generateRandomName();
      const randomAvatar = this.generateRandomAvatar();
      const randomColor = this.generateRandomColor();

      this.options.push({
        name: randomName,
        avatar: randomAvatar,
        color: randomColor,
      });
    }
  }

  generateRandomName(): string {
    // Lógica para generar nombres aleatorios
    return 'Usuario' + Math.floor(Math.random() * 100);
  }

  generateRandomAvatar(): string {
    // Lógica para generar avatares aleatorios
    return `./src/app/assets/avatars/avatar${Math.floor(Math.random() * 5)}.png`;
  }

  generateRandomColor(): string {
    // Lógica para generar colores aleatorios (puedes utilizar la función anterior)
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
   accionDelBoton() {
    // Lógica que se ejecutará cuando se haga clic en el botón
    console.log('Botón de transferencia clicado');
  }
  swiperConfig = {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
}
 


// function accionDelBoton() {
//   throw new Error('Function not implemented.');
// }
}
