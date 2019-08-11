import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';

import { ContactsService } from './contacts.service';
import { CometChat } from '@cometchat-pro/chat';

const listenerId = 'ContactsListListner';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit, OnDestroy {
  @Output() userSelected = new EventEmitter<CometChat.User>();

  activeUser: CometChat.User;

  constructor(readonly contactsService: ContactsService) {}

  ngOnInit() {
    this.contactsService.getContacts();
    this.contactsService.trackOnlineStatus(listenerId);
  }

  ngOnDestroy(): void {
    this.contactsService.destroy(listenerId);
  }

  onUserSelected(user: CometChat.User) {
    console.log(`Selected ${user}`);

    this.activeUser = user;
    this.userSelected.emit(user);
  }
}
