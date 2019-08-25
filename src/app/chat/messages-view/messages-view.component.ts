import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { CometChat } from '@cometchat-pro/chat';

@Component({
  selector: 'app-messages-view',
  templateUrl: './messages-view.component.html',
  styleUrls: ['./messages-view.component.scss']
})
export class MessagesViewComponent {
  @Input() messages: CometChat.TextMessage[] | null;
  @Output() sendMessage = new EventEmitter<string>();

  constructor(readonly authService: AuthService) {}

  onSendMessage(message: string) {
    this.sendMessage.emit(message);
  }
}
