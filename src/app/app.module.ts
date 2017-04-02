/**
 * This module is the entry for your App when NOT using universal.
 *
 * Make sure to use the 3 constant APP_ imports so you don't have to keep
 * track of your root app dependencies here. Only import directly in this file if
 * there is something that is specific to the environment.
 */

import {ApplicationRef, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {removeNgStyles, createNewHosts, createInputTransfer} from '@angularclass/hmr';

import {Store} from '@ngrx/store';

import {APP_DECLARATIONS} from './app.declarations';
import {APP_ENTRY_COMPONENTS} from './app.entry-components';

import {AppComponent} from './app.component';

import {AppState, InternalStateType} from './app.service';
import {APP_COMMON_PROVIDERS} from './app.common.providers';
import {DE_PROVIDERS} from './de.providers';
import {APP_COMMON_IMPORTS} from './app.common.imports';
import {DE_IMPORTS} from './de.imports';

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

@NgModule({
    declarations: [
        AppComponent,
        APP_DECLARATIONS
    ],
    entryComponents: [APP_ENTRY_COMPONENTS],
    imports: [
        APP_COMMON_IMPORTS,
        DE_IMPORTS,
        BrowserModule,
        HttpModule,
    ],
    bootstrap: [AppComponent],
    providers: [APP_COMMON_PROVIDERS, DE_PROVIDERS]
})

export class AppModule {
    constructor(public appRef: ApplicationRef,
                public appState: AppState) {
    }

    public hmrOnInit(store: StoreType) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            let restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    public hmrOnDestroy(store: StoreType) {
        const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
        // save state
        const state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    public hmrAfterDestroy(store: StoreType) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
