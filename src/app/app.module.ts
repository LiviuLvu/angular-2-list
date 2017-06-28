import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';
import { NameParentComponent } from './name-parent.component';
import { NameChildComponent } from './name-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VoteTakerComponent } from './votetaker.component';
import { VoterComponent } from './voter.component';
import { CountdownTimerComponent }  from './countdown-timer.component';
import { CountdownParentComponent  }  from './countdown-parent.component';
import { CountdownParentViewChildComponent  }  from './countdown-parent.component';
import { MissionControlComponent  }  from './missioncontrol.component';
import { AstronautComponent }  from './astronaut.component';
import { MessageReceiver }  from './message-receiver.component';
import { MessageSender }  from './message-sender.component';
import { MessageService }  from './message.service';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameParentComponent,
    NameChildComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    CountdownParentViewChildComponent,
    MissionControlComponent,
    AstronautComponent,
    MessageReceiver,
    MessageSender
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
