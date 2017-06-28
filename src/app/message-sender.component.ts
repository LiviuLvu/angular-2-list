import { Component } from '@angular/core';

import { MessageService } from './message.service';

// "HOME COMPONENT"
@Component({
  moduleId: module.id,
  selector: 'message-sender',
  template: `
    <div>
      <h1>Home</h1>
      <button (click)="sendMessage()">Send Message</button>
      <button (click)="clearMessage()">Clear Message</button>
      <br>
      <message-receiver></message-receiver>
    </div>
  `
})
export class MessageSender {
  constructor(private messageService: MessageService) { }

  sendMessage(): void {
    this.messageService.sendMessage('Message from Home Comp MessageSender to Receiver');
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }
}