import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contactos } from 'src/app/interfaces/contactos';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private contactosSource = new BehaviorSubject<Contactos[]>([]);
  contactos$ = this.contactosSource.asObservable();

  setContactos(contactos: Contactos[]) {
    this.contactosSource.next(contactos);
  }
}