import { Injectable } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';

const USERS_TO_FETCH = 30;

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: CometChat.UserObj[];

  constructor() {}

  getContacts() {
    const usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(USERS_TO_FETCH)
      .build();

    return usersRequest.fetchNext().then(users => {
      if (users instanceof Array) {
        console.log(users);
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        this.contacts = (<unknown>users) as CometChat.UserObj[];
      }
    }, console.error);
  }

  trackOnlineStatus(listenerId: string) {
    // Wrong typing, this should be fixed

    // tslint:disable-next-line: no-angle-bracket-type-assertion
    const userListener = new CometChat.UserListener(<any>{
      onUserOffline: usr => this.setUserStatus(usr, 'offline'),
      onUserOnline: usr => this.setUserStatus(usr, 'online')
    });

    // tslint:disable-next-line: no-angle-bracket-type-assertion
    return CometChat.addUserListener(listenerId, <any>userListener);
  }

  destroy(listenerId: string) {
    CometChat.removeUserListener(listenerId);
  }

  private setUserStatus(usr: CometChat.UserObj, status: string) {
    console.log(`Setting status: ${status} for ${usr}`);

    if (!this.contacts) {
      return;
    }

    const userToUpdate = this.contacts.find(c => c.uid === usr.uid);
    if (userToUpdate) {
      userToUpdate.status = status;
    }
  }
}
