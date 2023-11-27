import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  items = [
    'Número de tarjeta: 4508 1234 5678 9010 ', 
    'Fecha de vencimiento:12/24 ', 
    'Nombre del titular de la tarjeta: Alvarez Rocio',
    'Codigo de seguridad(cvv/cvc):785'
  ];

  addItem(item: string) {
    this.items.push(item);
  }


  constructor() { }

  ngOnInit() {
  }

}
