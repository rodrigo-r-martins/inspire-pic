/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FavoriteService } from './favorite.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn = false;
  isRegistered = false;
  user = null;
  isGuest = false;
  registeredUser = null;

  constructor(
    private logger: LoggerService,
    private favoriteService: FavoriteService
  ) { }

  async register(name, email, password) {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((currentUser) => {
      currentUser.user.updateProfile({
        displayName: name
      }).then(() => {
        this.isRegistered = true;
        this.registeredUser = currentUser.user;
        return this.isRegistered;
      }).catch((error) => {
        return error;
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.logger.log(errorMessage);
      return [errorCode, errorMessage];
    });
  };

  async login(email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      this.user = userCredential.user;
      this.favoriteService.userId = userCredential.user.uid;
      this.isLoggedIn = true;
      this.isGuest = false;
      return this.isLoggedIn;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.logger.log(errorMessage);
      return [errorCode, errorMessage];
    });
  };

  async logout() {
    await firebase.auth().signOut().then(() => {
      this.user = null;
      this.isLoggedIn = false;
      this.isRegistered = false;
      this.isGuest = false;
      this.registeredUser = null;
      return this.isLoggedIn;
    });
  };

  navigateAsGuest() {
    this.isGuest = true;
  }
}
