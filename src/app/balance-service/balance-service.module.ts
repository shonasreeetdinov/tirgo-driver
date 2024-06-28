import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {HeaderPageModule} from "../header/header.module";
import {TranslateModule} from "@ngx-translate/core";
import { BalanceServicePage } from './balance-service.page';
import { BalanceServicePageRoutingModule } from './balance-service-routing.module';
import { MainPipeModule } from "../pipes/main-pipe.module";

@NgModule({
    declarations: [BalanceServicePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BalanceServicePageRoutingModule,
        HeaderPageModule,
        TranslateModule,
        MainPipeModule
    ]
})
export class BalanceServicePageModule {}
