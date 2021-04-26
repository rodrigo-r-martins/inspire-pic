import { CheatSheetModalPage } from './../cheat-sheet-modal/cheat-sheet-modal.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tips',
  templateUrl: 'tips.page.html',
  styleUrls: ['tips.page.scss']
})
export class TipsPage {

  constructor(private modal: ModalController) {}

  async openCheatSheet() {
    const modal = await this.modal.create({
      component: CheatSheetModalPage,
      swipeToClose: true
    });
    return await modal.present();
  }
}
