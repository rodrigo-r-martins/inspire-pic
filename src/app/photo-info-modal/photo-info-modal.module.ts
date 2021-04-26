import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PhotoInfoModalPageRoutingModule } from './photo-info-modal-routing.module';
import { PhotoInfoModalPage } from './photo-info-modal.page';
import { PinchZoomModule } from 'ngx-pinch-zoom';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoInfoModalPageRoutingModule,
    PinchZoomModule
  ],
  declarations: [PhotoInfoModalPage]
})
export class PhotoInfoModalPageModule {}
