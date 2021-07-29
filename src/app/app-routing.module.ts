import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'photo-info-modal',
    loadChildren: () => import('./photo-info-modal/photo-info-modal.module').then( m => m.PhotoInfoModalPageModule)
  },
  {
    path: 'cheat-sheet-modal',
    loadChildren: () => import('./cheat-sheet-modal/cheat-sheet-modal.module').then( m => m.CheatSheetModalPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sign',
    loadChildren: () => import('./sign/sign.module').then( m => m.SignPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
