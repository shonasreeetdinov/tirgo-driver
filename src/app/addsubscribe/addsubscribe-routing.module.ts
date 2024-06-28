import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSubscribePage } from './addsubscribe.page';


const routes: Routes = [
  {
    path: '',
    component: AddSubscribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSubscribeRoutingModule {}
