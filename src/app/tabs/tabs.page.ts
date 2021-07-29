import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router
  ) {}

  async signOut() {
    const alert = await this.alertController.create({
      header: 'Sign Out',
      message: 'Are you sure you want to sign out?',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.authService.logout();
            this.router.navigate(['tabs/sign']);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    await alert.present();
  }
}
