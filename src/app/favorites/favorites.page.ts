import { PhotoInfoModalPage } from './../photo-info-modal/photo-info-modal.page';
import { ModalController } from '@ionic/angular';
import { ApiService } from './../service/api.service';
import { FavoriteService } from './../service/favorite.service';
import { Component, OnInit } from '@angular/core';

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
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.favoritePhotos = this.favoriteService.favoritePhotos;
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
