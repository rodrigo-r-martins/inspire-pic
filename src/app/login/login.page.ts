import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: '',
    password: '',
  };

  constructor(
    private modalController: ModalController,
    private authService: AuthenticationService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async openRegister() {
    this.dismissLogin();
    // this.router.navigate(['/register']);
  }

  dismissLogin() {
    this.modalController.dismiss({
      dismissed: true
    }).catch(() => this.router.navigate(['tabs/sign']));
  }

  async showLoginErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid credentials',
      message: 'Incorrect email or password!',
      buttons: ['Try again']
    });
    await alert.present();
  }

  async login() {
    await this.authService.login(this.user.email, this.user.password);
    if (this.authService.isLoggedIn) {
      this.dismissLogin();
      this.router.navigate(['tabs/home']);
    } else {
      this.showLoginErrorAlert();
    }
  }
}
