import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TipsPage } from './tips.page';
import { TipsPageRoutingModule } from './tips-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TipsPage }]),
    TipsPageRoutingModule,
  ],
  declarations: [TipsPage]
})
export class TipsPageModule {}
