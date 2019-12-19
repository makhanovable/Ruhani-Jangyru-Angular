import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import {PopoversComponent} from './popovers.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Content'
    },
    children: [
      {
        path: '',
        redirectTo: 'moderation'
      },
      {
        path: 'profile',
        component: FormsComponent,
        data: {
          title: 'Profile'
        }
      },
      {
        path: 'add',
        component: SwitchesComponent,
        data: {
          title: 'Add post'
        }
      },
      {
        path: 'posts',
        component: CarouselsComponent,
        data: {
          title: 'Posts'
        }
      },
      {
        path: 'settings',
        component: CollapsesComponent,
        data: {
          title: 'Settings'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Content'
        }
      },
      {
        path: 'moderation',
        component: PopoversComponent,
        data: {
          title: 'Moderation'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
