import { Routes, RouterModule } from '@angular/router';

import { MessageSender } from './message-sender.component';

const appRoutes: Routes = [
    { path: '', component: MessageSender },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);