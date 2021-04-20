import { ApiService } from './../service/api.service';
import { AfterViewInit, Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

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
  photos: any;
  inputPhotos: any;

  constructor(
    private apiService: ApiService,
    private toast: ToastController
    ) {}

  ngAfterViewInit() {
    this.photos = {
      Architectural: this.getPhotos('architectural'),
      Wild: this.getPhotos('wild'),
      Wanderlust: this.getPhotos('wanderlust'),
      Sports: this.getPhotos('sports')
    };
  };

  getPhotos(typeOfPhoto: string) {
    this.apiService.getPhotos(typeOfPhoto);
  }

  async getInputPhotos() {
    let data: any = await this.apiService.getPhotos(this.typeOfPhotoInput);
    if (data.errors) {
      data = null;
      this.showToast(data.errors[0]);
    } else {
      this.inputPhotos = await data.response.results;
      console.log(this.inputPhotos);
    }
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
}
