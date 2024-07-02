import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-why-choose-us',
    templateUrl: './why-choose-us.component.html',
    styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {

    constructor(
        public router: Router
    ) { }

}