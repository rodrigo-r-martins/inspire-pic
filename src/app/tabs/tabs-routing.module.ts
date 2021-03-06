import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'popular',
        loadChildren: () => import('../popular/popular.module').then(m => m.PopularPageModule)
      },
      {
        path: 'tips',
        loadChildren: () => import('../tips/tips.module').then(m => m.TipsPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('../favorites/favorites.module').then(m => m.FavoritesPageModule)
      },
      {
        path: 'sign',
        loadChildren: () => import('../sign/sign.module').then(m => m.SignPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/sign',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/sign',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
