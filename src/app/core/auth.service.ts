import { Injectable } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';
import { MatSnackBar } from '@angular/material';

const localStorageKey = 'appIdAndApiKey';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get isDemo() {
    return !this.apiKey;
  }

  private apiKey: string | null;

  currentUser: unknown; // CometChat.UserObj;

  constructor(private snackBar: MatSnackBar) {
    const [appId, apiKey] = this.fetchAppIdAndApiKey();

    if (appId && apiKey) {
      this.init(appId, apiKey);
    }
  }

  init(appId: string, apiKey: string) {
    CometChat.init(appId).then(
      msg => {
        console.log('Initialized succesfull: ', msg);
        localStorage.setItem(localStorageKey, appId + ':' + apiKey);
        this.apiKey = apiKey;
      },
      err => {
        console.log('App init failed', err);
        this.apiKey = null;
        this.snackBar.open(
          'App initialization failed. Please refresh the page.'
        );
      }
    );
  }

  login(userId: string) {
    return CometChat.login(userId)
      .then(usr => (this.currentUser = usr), (this.currentUser = null))
      .then(_ => console.log('User logged in'), console.error);
  }

  private fetchAppIdAndApiKey() {
    let appIdAndApiKey = localStorage.getItem(localStorageKey);

    if (!appIdAndApiKey) {
      appIdAndApiKey = prompt('Enter app id and api key (appId:appKey)', '');
    }

    return appIdAndApiKey.split(':');
  }
}
