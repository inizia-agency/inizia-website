import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-values',
    templateUrl: './values.component.html',
    styleUrls: ['./values.component.scss']
})
export class ValuesComponent {

    constructor(
        public router: Router
    ) { }

}
