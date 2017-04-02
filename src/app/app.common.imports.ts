import { RouterModule} from '@angular/router';
import { routes } from './de.routing';
import { AngularFireModule } from 'angularfire2';
import { AgmCoreModule } from 'angular2-google-maps/ts/core';

/* Must export the config*/
export const firebaseConfig = {
    apiKey: 'AIzaSyBI2x7RS-Q8TVrzErDACmnlltELaZL5ve8',
    authDomain: 'dealsencash-ec7ee.firebaseapp.com',
    databaseURL: 'https://dealsencash-ec7ee.firebaseio.com',
    storageBucket: 'dealsencash-ec7ee.appspot.com',
    messagingSenderId: '77951830798'
};

export const APP_COMMON_IMPORTS = [
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBh_32YzrrXJxo8lnfxd8nOLFNKcPIrabI',
        libraries: ['places']
    })
];
