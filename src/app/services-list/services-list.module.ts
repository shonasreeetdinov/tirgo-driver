import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import {MainPipeModule} from "../pipes/main-pipe.module";
import {TranslateModule} from "@ngx-translate/core";
import { ServicesListPageRoutingModule } from './services-list-routing.module';
import { ServicesListPage } from './services-list.page';
import { HeaderPageModule } from '../header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ServicesListPageRoutingModule,
        MainPipeModule,
        TranslateModule,
        HeaderPageModule,
    ],
  declarations: [ServicesListPage]
})
export class ServicesListModule {}