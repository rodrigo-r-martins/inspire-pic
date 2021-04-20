import { Injectable } from '@angular/core';
import { createApi } from 'unsplash-js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  unsplashApi = createApi({
    accessKey: '5UjT3DIsJ29faetingG040uys7rjl-zIrVQh0akGWHA', 
  });

  constructor() { }

  getPhotos(typeOfPhoto: string) {
    return this.unsplashApi.search.getPhotos({
      query: typeOfPhoto
    })
    .then(res => {
      // console.log(res.response.results);
      return res; 
    })
    .catch(err => {
      console.log(err);
    });
  };
}
