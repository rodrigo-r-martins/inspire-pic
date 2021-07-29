import { LoggerService } from './logger.service';
import { Injectable, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/database';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favoritePhotos = [];
  db = firebase.database().ref();
  userId;

  constructor(
    private logger: LoggerService,
    private dbService: DatabaseService
  ) {
    this.favoritePhotos = this.dbService.favoritePhotos;
  }

  async manageFavorite(photo: any) {
    if (!this.isFavorite(photo.id)) {
      this.favoritePhotos.push(photo);
      await this.dbService.addPhotoToFavorites(this.userId, photo);
    } else {
      for (let i=0; i<this.favoritePhotos.length; i++) {
        if (this.favoritePhotos[i].id === photo.id) {
          this.favoritePhotos.splice(i, 1);
          i--;
        }
      }
      await this.dbService.removePhotoFromFavorites(this.userId, photo.id);
    }
    this.logger.log("favoriteService > manageFavorite: ");
    this.logger.log(this.favoritePhotos);
  }

  isFavorite(photoId: string) {
    for (let i=0; i<this.favoritePhotos.length; i++) {
      if (this.favoritePhotos[i].id === photoId) {
        return true;
      }
    }
    return false;
  }
}
