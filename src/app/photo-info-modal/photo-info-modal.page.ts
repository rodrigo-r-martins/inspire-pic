import { FavoriteService } from './../service/favorite.service';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-info-modal',
  templateUrl: './photo-info-modal.page.html',
  styleUrls: ['./photo-info-modal.page.scss'],
})
export class PhotoInfoModalPage implements OnInit {
  @Input() photoData;

  constructor(
    private modal: ModalController,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modal.dismiss({
      dismissed: true
    });
  }

  isFavorite(photoId: string) {
    return this.favoriteService.isFavorite(photoId);
  }

  manageFavoritePhoto(photo: string) {
    this.favoriteService.manageFavorite(photo);
    console.log(this.favoriteService.favoritePhotos);
  }
}
