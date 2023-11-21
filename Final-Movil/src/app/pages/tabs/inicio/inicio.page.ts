import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  saldo: number = 10000;
  options: any[] = [];

  constructor() { }

  ngOnInit() {
    this.options = [
      {id:1, color:'tertiary', icon: 'paper-plane', name:'Enviar'},
      {id:2, color:'white', icon: 'send',name: 'Ingresar' },
      {id:3, color:'success', icon: 'add-circle', name:'Sacar'},
      {id:4, color:'light', icon:'person', name: 'Info'},
    ];
  }

}
