import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Data'
    },
    children: [
      {
        path: '',
        redirectTo: 'posts'
      },
      {
        path: 'posts',
        component: ColorsComponent,
        data: {
          title: 'Posts'
        }
      },
      {
        path: 'about',
        component: TypographyComponent,
        data: {
          title: 'About'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
