import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheatSheetModalPage } from './cheat-sheet-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CheatSheetModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheatSheetModalPageRoutingModule {}
