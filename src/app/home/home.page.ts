import { PhotoInfoModalPage } from './../photo-info-modal/photo-info-modal.page';
import { FavoriteService } from './../service/favorite.service';
import { ApiService } from './../service/api.service';
import { AfterViewInit, Component } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements AfterViewInit {

  slideOpts = {
    initalSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 300
  };

  typeOfPhotoInput: string;
  photos: {};
  inputPhotos: any;

  constructor(
    private apiService: ApiService,
    private toast: ToastController,
    private modal: ModalController,
    private favoriteService: FavoriteService,
    public authService: AuthenticationService
    ) {}

  ngAfterViewInit() {
    this.photos = {
      landscape: this.getPhotos('landscape'),
      travel: this.getPhotos('travel'),
      night: this.getPhotos('night'),
      wild: this.getPhotos('wild')
    };
  };

  async getPhotos(typeOfPhoto: string) {
    let data = await this.apiService.getPhotosByType(typeOfPhoto);
    return await data['response'].results;
  }

  async getInputPhotos() {
    let data: any = await this.apiService.getPhotosByType(this.typeOfPhotoInput);
    if (data.errors) {
      this.showToast(data.errors[0]);
    } else {
      this.inputPhotos = await data.response.results;
    }
  }

  isFavorite(photoId: string) {
    return this.favoriteService.isFavorite(photoId);
  }

  manageFavoritePhoto(photo: {}) {
    this.favoriteService.manageFavorite(photo);
  }

  async showToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 3000,
      position: 'middle',
      color: 'dark'
    });
    toast.present();
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
