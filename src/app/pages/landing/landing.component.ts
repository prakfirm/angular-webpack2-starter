/**
 * Created by praghav on 4/1/2017.
 */
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'de-landing',
    templateUrl: 'landing.component.html'
})
export class LandingComponent implements OnInit {
    public ngOnInit() {
        console.log('Landing `Landing` component');
    }
}
