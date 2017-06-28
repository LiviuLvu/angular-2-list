import { Component, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from "./message.service";

// "APP COMPONENT"
@Component({
  moduleId: module.id,
  selector: 'message-receiver',
  template: `
    <div *ngIf="message" class="alert alert-success">
      {{message.text}}
    </div>
  `
})
export class MessageReceiver implements OnDestroy {
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage()
      .subscribe(message => { this.message = message; });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}