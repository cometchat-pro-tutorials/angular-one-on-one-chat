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
  selectedUser: CometChat.UserObj;
  messages: CometChat.TextMessage[] | null = null;

  constructor(
    readonly authService: AuthService,
    readonly chatService: ChatService
  ) {}

  ngOnInit() {
    this.chatService.listenForMessages(listenerId, msg => {
      console.log('New message: ', msg);
      this.messages = [...this.messages, msg];
    });
  }

  ngOnDestroy() {
    this.chatService.removeMessageListener(listenerId);
  }

  async onUserSelected(usr: CometChat.UserObj) {
    this.selectedUser = usr;
    const messages = await this.chatService.getPreviousMessages(usr.uid);
    console.log('Previous messages', messages);

    this.messages = (messages as any[]).filter(msg => msg.type === 'text');
  }

  async onSendMessage(message: string) {
    console.log('sending message: ', message);
    const sentMessage = await this.chatService.sendMessage(
      this.selectedUser.uid,
      message
    );

    console.log({ sentMessage });

    if (sentMessage) {
      this.messages = [...this.messages, sentMessage as any];
    }
  }
}
