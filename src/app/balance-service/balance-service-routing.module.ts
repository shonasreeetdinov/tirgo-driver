import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceServicePage } from './balance-service.page';


const routes: Routes = [
  {
    path: '',
    component: BalanceServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceServicePageRoutingModule {}
