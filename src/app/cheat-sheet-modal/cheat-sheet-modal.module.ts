import { PinchZoomModule } from 'ngx-pinch-zoom';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CheatSheetModalPageRoutingModule } from './cheat-sheet-modal-routing.module';
import { CheatSheetModalPage } from './cheat-sheet-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheatSheetModalPageRoutingModule,
    PinchZoomModule
  ],
  declarations: [CheatSheetModalPage]
})
export class CheatSheetModalPageModule {}
