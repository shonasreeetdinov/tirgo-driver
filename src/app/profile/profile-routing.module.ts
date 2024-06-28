import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { AddSubscribePage } from '../addsubscribe/addsubscribe.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children: [
      {path: 'addsubscribe', component: AddSubscribePage}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
