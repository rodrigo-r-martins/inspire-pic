import { PhotoInfoModalPage } from './../photo-info-modal/photo-info-modal.page';
import { ModalController } from '@ionic/angular';
import { ApiService } from './../service/api.service';
import { FavoriteService } from './../service/favorite.service';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../service/database.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favoritePhotos: any;

  constructor(
    private favoriteService: FavoriteService,
    private apiService: ApiService,
    private modal: ModalController,
    private dbService: DatabaseService,
    private authService: AuthenticationService
  ) { }

  async ngOnInit() {
    await this.dbService.getUserFavoritePhotos(this.authService.user.uid);
    this.favoritePhotos = this.dbService.favoritePhotos;
  }

  async openPhotoModal(photoId: string) {
    let data: any = await this.apiService.getExactPhoto(photoId);
    const modal = await this.modal.create({
      component: PhotoInfoModalPage,
      componentProps: {
        photoData: data
      }
    });
    return await modal.present();
  };

  isFavorite(photoId: string) {
    return this.favoriteService.isFavorite(photoId);
  }

  manageFavoritePhoto(photo: any) {
    this.favoriteService.manageFavorite(photo);
    console.log(this.favoriteService.favoritePhotos);
  }
}
