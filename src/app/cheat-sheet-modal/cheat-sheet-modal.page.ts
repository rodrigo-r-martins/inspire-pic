import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheat-sheet-modal',
  templateUrl: './cheat-sheet-modal.page.html',
  styleUrls: ['./cheat-sheet-modal.page.scss'],
})
export class CheatSheetModalPage implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modal.dismiss({
      dismissed: true
    });
  }
}
