import { Injectable } from '@angular/core';

import { CometChat } from '@cometchat-pro/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() {}

  sendMessage(receiverId: string, text: string) {
    const message = new CometChat.TextMessage(
      receiverId,
      text,
      CometChat.MESSAGE_TYPE.TEXT,
      CometChat.RECEIVER_TYPE.USER
    );

    return CometChat.sendMessage(message);
  }

  listenForMessages(listenerId: string, onMessageReceived: (msg: any) => void) {
    CometChat.addMessageListener(
      listenerId,
      new CometChat.MessageListener({
        onTextMessageReceived: onMessageReceived,
        onMediaMessageReceived: _ => undefined
      })
    );
  }

  removeMessageListener(listenerId: string) {
    CometChat.removeMessageListener(listenerId);
  }

  getPreviousMessages(userId: string) {
    const messageRequest = new CometChat.MessagesRequestBuilder()
      .setUID(userId)
      .setLimit(100)
      .build();

    return messageRequest.fetchPrevious();
  }
}
