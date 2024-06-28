import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {HeaderPageModule} from "../header/header.module";
import {TranslateModule} from "@ngx-translate/core";
import { AddSubscribeRoutingModule } from './addsubscribe-routing.module';
import { AddSubscribePage } from './addsubscribe.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddSubscribeRoutingModule,
        HeaderPageModule,
        TranslateModule,
    ],
  declarations: [AddSubscribePage]
})
export class AddSubscribeModule {}
