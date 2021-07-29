import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../service/authentication.service';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  constructor(
    private modalController: ModalController,
    private authService: AuthenticationService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  openLogin() {
    this.dismissRegister();
    // this.router.navigate(['/login']);
  }

  dismissRegister() {
    this.modalController.dismiss({
      dismissed: true
    }).catch(() => this.router.navigate(['tabs/sign']));
  }

  async showWrongPasswordAlert() {
    const alert = await this.alertController.create({
      header: 'Wrong Password',
      message: 'Password doesn\'t match!',
      buttons: ['Try again']
    });
    await alert.present();
  }

  async register() {
    const name = `${this.user.firstName} ${this.user.lastName}`;
    if (this.user.password === this.user.passwordConfirm) {
      const isRegistered = this.authService.register(name, this.user.email, this.user.password);
      if (isRegistered) {
        this.dismissRegister();
        // this.openLogin();
      };
    } else {
      this.showWrongPasswordAlert();
    }
  }
}
