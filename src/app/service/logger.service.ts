import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(text: any) { 
    if (isDevMode()) {
      console.log(text);
    }
  };
}
