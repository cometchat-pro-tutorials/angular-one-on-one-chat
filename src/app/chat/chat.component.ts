import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../core/auth.service';
import { CometChat } from '@cometchat-pro/chat';
import { ChatService } from './chat.service';

const listenerId = 'ChatScreenListener';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  visibleMessages: CometChat.TextMessage[] | null = null;
  selectedUser: CometChat.UserObj;

  // Cache for all users messages
  // Move all functionality to service...
  messages = new Map<string, CometChat.TextMessage[]>();

  constructor(
    readonly authService: AuthService,
    readonly chatService: ChatService
  ) {}

  ngOnInit() {
    this.chatService.listenForMessages(listenerId, msg =>
      console.log(`Message received: ${msg}`)
    );
  }

  ngOnDestroy() {
    this.chatService.removeListener(listenerId);
  }

  onUserSelected(usr: CometChat.UserObj) {
    this.selectedUser = usr;
    this.chatService.getPreviousMessages(usr.uid);
  }

  onSendMessage(message: string) {
    this.chatService.sendMessage(this.selectedUser.uid, message);

    // Only on success
    const newMessage = new CometChat.TextMessage(
      this.selectedUser.uid,
      message,
      'type',
      'user'
    );
    this.visibleMessages = [...this.visibleMessages, newMessage];
  }
}
