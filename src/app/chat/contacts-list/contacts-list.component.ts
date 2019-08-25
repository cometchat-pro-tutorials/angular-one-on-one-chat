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

  async ngOnInit() {
    await this.contactsService.getContacts();
    await this.contactsService.trackOnlineStatus(listenerId);

    this.selectFirstContact();
  }

  private selectFirstContact() {
    if (
      this.contactsService.contacts &&
      this.contactsService.contacts.length !== 0
    ) {
      this.onUserSelected(this.contactsService.contacts[0] as any);
    }
  }

  ngOnDestroy(): void {
    this.contactsService.destroy(listenerId);
  }

  onUserSelected(user: CometChat.User) {
    this.activeUser = user;
    this.userSelected.emit(user);
  }
}
