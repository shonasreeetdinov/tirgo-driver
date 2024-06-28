import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NtobrPipe } from './ntobr.pipe';
import { TransportType } from './transport-type.pipe';
import { NumberFormatPipe } from './number-formant.pipe';

@NgModule({
    declarations: [
        NtobrPipe,
        TransportType,
        NumberFormatPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NtobrPipe,
        TransportType,
        NumberFormatPipe

    ]
})
export class MainPipeModule {
}
