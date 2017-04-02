/**
 * Created by praghav on 4/1/2017.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// material Module
import {MaterialModule} from '@angular/material';
// Flex layout module
import {FlexLayoutModule} from '@angular/flex-layout';
import {LandingComponent} from './landing.component';

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        LandingComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule
    ],
    exports: [LandingComponent]
})
export class LandingModule {
}
