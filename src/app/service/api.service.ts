import { environment } from './../../environments/environment';
import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { createApi } from 'unsplash-js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  unsplashApi = createApi({
    accessKey: environment.unsplash_API_KEY, // ENTER YOUR API KEY
  });
  random = 100;

  constructor(private logger: LoggerService) { }

  
  getPhotosByType(typeOfPhoto: string) {
    return this.unsplashApi.search.getPhotos({
      query: typeOfPhoto,
      page: 1,
      perPage: 30,
    })
    .then(res => {
      this.logger.log(`apiService > getPhotosByType > ${typeOfPhoto}:`);
      this.logger.log(res.response);
      return res; 
    })
    .catch(err => {
      this.logger.log("apiService > getPhotosByType > Error: " + err);
    });
  };

  getPopularPhotos() {
    return this.unsplashApi.search.getPhotos({
      query: 'explore',
      orderBy: 'relevant',
      page: 1,
      perPage: 30
    })
    .then(res => {
      this.logger.log("apiService > getPopularPhotos:");
      this.logger.log(res.response);
      return res;
    })
    .catch(err => {
      this.logger.log("apiService > getPopularPhotos > Error: " + err);
    });
  };

  getExactPhoto(photoId: string) {
    return this.unsplashApi.photos.get({
      photoId: photoId
    })
    .then(res => {
      this.logger.log("apiService > getExactPhoto:");
      this.logger.log(res.response);
      return res.response;
    })
    .catch(err => {
      this.logger.log("apiService > getExactPhoto > Error: " + err);
    });
  };
}
