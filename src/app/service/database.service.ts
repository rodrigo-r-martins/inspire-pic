/* eslint-disable object-shorthand */
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/database';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  db = firebase.database().ref();
  favoritePhotos = [];

  constructor(
    private logger: LoggerService
  ) { }

  async getUsers() {
    await this.db.child('users').get().then((snapshot) => {
      if (snapshot.exists()) {
        this.logger.log(snapshot.val());
      } else {
        this.logger.log('No data available');
      }
    }).catch((error) => {
      this.logger.log(error);
    });
  }

  async getUserFavoritePhotos(userId) {
    await this.db.child(`users/${userId}/favorites/`).get().then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach(value => {
          this.favoritePhotos.push(value.val());
        });
        return this.favoritePhotos;
      } else {
        this.logger.log('No data available');
      }
    }).catch((error) => {
      this.logger.log(error);
    });
  }

  // isPhotoFavorite(userId, photoId) {
  //   this.db.child(`users/${userId}/favorites/${photoId}`).get().then((snapshot) => {
  //     if (snapshot.exists()) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }).catch(error => {
  //     this.logger.log(error);
  //   })
  // }

  async addPhotoToFavorites(userId, photo) {
    await this.db.child(`users/${userId}/favorites/${photo.id}`).set(photo);
  }

  async removePhotoFromFavorites(userId, photoId) {
    await this.db.child(`users/${userId}/favorites/${photoId}`).remove();
  }
}
