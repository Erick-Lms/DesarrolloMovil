import { Component, OnInit } from '@angular/core';
import { TabsService } from 'src/app/tabs.service';

@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.scss'],
})
export class SacarComponent  implements OnInit {

  constructor(private tabsService: TabsService) { }

  ionViewWillEnter() {
    this.tabsService.toggleTabs(false);
  }
  ngOnInit() {}

}
