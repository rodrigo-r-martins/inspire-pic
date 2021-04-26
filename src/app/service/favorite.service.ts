import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favoritePhotos = [];

  constructor(private logger: LoggerService) { }

  manageFavorite(photo: any) {
    if (!this.isFavorite(photo.id)) {
      this.favoritePhotos.push(photo);
    } else {
      for (let i=0; i<this.favoritePhotos.length; i++) {                               
        if (this.favoritePhotos[i].id === photo.id) { 
          this.favoritePhotos.splice(i, 1); 
          i--; 
        }
      }
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
