// src/app/tabs.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  private mostrarTabs = new BehaviorSubject<boolean>(true);
  mostrarTabs$ = this.mostrarTabs.asObservable();

  toggleTabs(mostrar: boolean) {
    this.mostrarTabs.next(mostrar);
  }
}
