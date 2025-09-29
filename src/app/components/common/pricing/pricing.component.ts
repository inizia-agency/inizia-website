import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

    constructor(
        public router: Router
    ) { }

}