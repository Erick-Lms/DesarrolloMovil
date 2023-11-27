import { Component, OnInit } from '@angular/core';
import { TransferenciasService } from 'src/app/services/transferenciaservice.service';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {
  transferencias: any[] | undefined;

  constructor(private transferenciasService: TransferenciasService) {}


  ngOnInit() {
    this.transferencias = this.transferenciasService.obtenerTransferencias();
    console.log(this.transferencias);
  }

}
