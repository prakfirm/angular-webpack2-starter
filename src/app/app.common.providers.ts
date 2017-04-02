import {GlobalState} from '@deals-encash/common';
import {AppState} from './app.service';

export const APP_COMMON_PROVIDERS = [
    AppState,
    GlobalState
];
