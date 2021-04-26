import { PhotoInfoModalPage } from './../photo-info-modal/photo-info-modal.page';
import { ModalController } from '@ionic/angular';
import { FavoriteService } from './../service/favorite.service';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: 'popular.page.html',
  styleUrls: ['popular.page.scss']
})
export class PopularPage implements OnInit {

  popularPhotos: any;

  constructor(
    private apiService: ApiService,
    private favoriteService: FavoriteService,
    private modal: ModalController
  ) {}

  ngOnInit() {
    this.popularPhotos = this.getPhotos();
  }

  async getPhotos() {
    let data = await this.apiService.getPopularPhotos();
    return await data['response'].results;
  }

  isFavorite(photoId: string) {
    return this.favoriteService.isFavorite(photoId);
  }

  manageFavoritePhoto(photo: string) {
    this.favoriteService.manageFavorite(photo);
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
}
