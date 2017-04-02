import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GlobalState} from '@deals-encash/common';

@Component({
    selector: 'deals-encash-root',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private _state: GlobalState,
                public route: ActivatedRoute,
                public router: Router) {
    }
}
