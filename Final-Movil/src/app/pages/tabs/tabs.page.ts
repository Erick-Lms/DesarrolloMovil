import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { TabsService } from 'src/app/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild('tabs', { static: false })
  tabs!: IonTabs;
  selectedTab: any;

  constructor(private tabsService: TabsService) { }

  ionViewWillEnter() {
    this.tabsService.toggleTabs(true);
  }
  ngOnInit() {
  }
  setCurrentTab() {
    this.selectedTab = !this.tabs.getSelected();
    console.log(this.selectedTab);
  }

}
