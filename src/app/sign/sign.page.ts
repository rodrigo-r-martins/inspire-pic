import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {

  constructor(
    private modalController: ModalController,
    public authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async openRegister() {
    const modal = await this.modalController.create({
      component: RegisterPage,
    });
    return await modal.present();
  }

  async openLogin() {
    const modal = await this.modalController.create({
      component: LoginPage,
    });
    return await modal.present();
  }

  openAsGuest() {
    this.router.navigate(['/tabs/home']);
    this.authService.navigateAsGuest();
  }
}
