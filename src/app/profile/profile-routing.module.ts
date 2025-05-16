import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import {PasswordComponent} from "./password/password.component";

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children: [
      {
        path: 'password',
        component: PasswordComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
