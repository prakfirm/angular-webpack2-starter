/**
 * Created by alokumar on 9/7/2016.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";
import {PageNotFoundComponent} from "./page-not-found.component";


@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ]
})
export class PageNotFoundModule {
}
