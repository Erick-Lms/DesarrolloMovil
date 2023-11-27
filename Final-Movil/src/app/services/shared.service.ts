import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  contact = [
    { 
      id: 1, 
      color: 'white', 
      name: 'Juan Marquez', 
      image: './assets/avatars/avatar.png', 
      n_cuenta: '1589623457879651', 
      banco: 'Banco Santander Rio'
    },
    { 
      id: 2, 
      color: 'white', 
      name: 'Esteban Morales', 
      image: './assets/avatars/avatar1.png', 
      n_cuenta: '7896515269746851', 
      banco: 'Banco Macro' 
    },
    { 
      id: 3, 
      color: 'white', 
      name: 'Ernesto Villalobos', 
      image: './assets/avatars/avatar2.png', 
      n_cuenta: '2244589165321578', 
      banco:'Banco Nacion'
    },
    { 
      id: 4, 
      color: 'white', 
      name: 'Carmen Figueroa', 
      image: './assets/avatars/avatar3.png', 
      n_cuenta: '345789651589621', 
      banco: 'Banco Patagonia' 
    },
    { 
      id: 5, 
      color: 'white', 
      name: 'Rodrigo Ferreira', 
      image: './assets/avatars/avatar4.png', 
      n_cuenta: '457896515896231', 
      banco: 'Banco Cabal'
    },
    { id: 6, 
      color: 'white', 
      name: 'Juan Marquez', 
      image: './assets/avatars/avatar.png', 
      n_cuenta: '1589623457879651', 
      banco: 'Banco Santander Rio'
    },
    { id: 7, 
      color: 'white', 
      name: 'Ricardo Arjona', 
      image: './assets/avatars/avatar1.png', 
      n_cuenta: '7896515269746851', 
      banco: 'Banco Macro' 
    },
    { 
      id: 8, 
      color: 'white', 
      name: 'Leonel Messi', 
      image: './assets/avatars/avatar2.png', 
      n_cuenta: '2244589165321578', 
      banco:'Banco Nacion'
    },
    { 
      id: 9, 
      color: 'white', 
      name: 'Diego Maradona', 
      image: './assets/avatars/avatar3.png', 
      n_cuenta: '345789651589621', 
      banco: 'Banco Patagonia' 
    },
    { 
      id: 10, 
      color: 'white', 
      name: 'Belingham', 
      image: './assets/avatars/avatar4.png', 
      n_cuenta: '457896515896231', 
      banco: 'Banco Cabal'
    },
  ];
  constructor() {}  

  getContactos() {
    return (this.contact)

  }
  // addContactos(color:string, name:string, n_cuenta:string, banco:string){
  //   this.contact.push(
  //     {
  //       id: this.contact.length + 1 + "",
  //       color: color,
  //       name: name,
  //       n_cuenta: n_cuenta,
  //       banco: banco
  //     }
  //   )
  // }
  // getContactById(contactID: string){
  //   this.contact.find( p => {
  //     return p.id === contactID
  //   })
  // }
}
