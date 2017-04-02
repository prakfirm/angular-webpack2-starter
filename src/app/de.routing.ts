/* tslint:disable: max-line-length */
import {Routes} from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: '**', component: PageNotFoundComponent}
];
