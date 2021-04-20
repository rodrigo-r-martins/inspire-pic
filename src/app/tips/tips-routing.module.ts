import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipsPage } from './tips.page';

const routes: Routes = [
  {
    path: '',
    component: TipsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipsPageRoutingModule {}
