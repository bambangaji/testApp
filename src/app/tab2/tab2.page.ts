import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CustomItemListComponent } from '../custom-item-list/custom-item-list.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CustomItemListComponent, CommonModule]
})
export class Tab2Page {
  listMenu = [
    {
      title: "Ganti Kata Sandi",
      iconStart: "lock-closed",
      iconEnd: "chevron-forward-outline",
      // callBack:
    },
    {
      title: "Beri Nilai Aplikasi",
      iconStart: "star",
      iconEnd: "chevron-forward-outline",
      // callBack:
    },
    {
      title: "Bantuan",
      iconStart: "alert",
      iconEnd: "chevron-forward-outline",
      // callBack:
    },
    {
      title: "Notifikasi",
      iconStart: "alert-circle",
      iconEnd: "chevron-forward-outline",
      // callBack:
    },
    {
      title: "Kebijakan Privasi",
      iconStart: "shield",
      iconEnd: "chevron-forward-outline",
      // callBack:
    },

  ]

  isAlertOpen = false;
  public alertButtons = [
    {
      text: 'Batal',
      role: 'cancel',
      handler: () => { }
    },
    {
      text: 'Keluar',
      role: 'confirm',
      handler: () => {this.router.navigateByUrl('login', { replaceUrl: true }); },
      cssClass: 'text-danger',
    }
  ];
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  constructor(private router: Router) { }
}
